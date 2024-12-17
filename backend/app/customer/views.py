from rest_framework.views import APIView

# from rest_framework import generics

from rest_framework.response import Response

from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import tb_customer


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


class registerView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        password = request.data.get("password")

        if not name or not email or not password:
            return Response(
                {"error": "Name, Email and Password are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(username=email).exists():
            return Response(
                {
                    "error": "User with this email already exists",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        try:
            user = User.objects.create_user(username=email, email=email)
            user.save()
            user.set_password(password)
            user.save()

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        try:
            customer = tb_customer.objects.create(user=user, name=name, email=email)

            token = get_tokens_for_user(user)
            return Response(
                {
                    "message": "Registration successful",
                    "user": customer.name,
                    "token": token,
                },
                status=status.HTTP_200_OK,
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class loginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return Response(
                {"error": "Email or Password is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not User.objects.filter(username=email).exists():
            return Response(
                {"error": "User with this email does not exist"},
                status=status.HTTP_404_NOT_FOUND,
            )

        try:
            user = authenticate(request, username=email, password=password)
            if user is not None and hasattr(user, "customer"):
                token = get_tokens_for_user(user)
                return Response(
                    {
                        "message": "Login successful",
                        "user": user.customer.name,
                        "token": token,
                    },
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"error": "Invalid credentials or not a User"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
