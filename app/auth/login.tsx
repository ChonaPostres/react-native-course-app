import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Link, Stack } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Custom focus states for outline styling
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert(`Iniciando sesión con: ${email}`);
  };

  const handleSocialLogin = (platform: "Google" | "GitHub") => {
    alert(`Login con ${platform} (Demo)`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-slate-950"
    >
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          className="px-6 py-12"
          showsVerticalScrollIndicator={false}
        >
          {/* Card Container */}
          <View className="bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-800">
            {/* Header */}
            <View className="items-center mb-8">
              <View className="w-16 h-16 bg-indigo-950/80 rounded-2xl items-center justify-center mb-4 border border-indigo-900/40">
                <Feather name="lock" size={28} color="#6366F1" />
              </View>
              <Text className="text-2xl font-bold text-white text-center">
                ¡Bienvenido de nuevo!
              </Text>
              <Text className="text-slate-400 text-sm mt-1 text-center">
                Ingresa tus credenciales para continuar
              </Text>
            </View>

            {/* Email Field */}
            <View className="mb-4">
              <Text className="text-slate-300 text-sm font-medium mb-1.5 ml-1">
                Correo Electrónico
              </Text>
              <View
                className={`flex-row items-center border rounded-xl px-3.5 py-3 bg-slate-950/40 ${
                  isEmailFocused ? "border-indigo-500 bg-slate-950/80" : "border-slate-800"
                }`}
              >
                <Feather name="mail" size={20} color={isEmailFocused ? "#6366F1" : "#64748B"} />
                <TextInput
                  placeholder="ejemplo@correo.com"
                  placeholderTextColor="#64748B"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className="flex-1 text-slate-100 text-base font-normal ml-3 p-0"
                />
              </View>
            </View>

            {/* Password Field */}
            <View className="mb-3">
              <Text className="text-slate-300 text-sm font-medium mb-1.5 ml-1">
                Contraseña
              </Text>
              <View
                className={`flex-row items-center border rounded-xl px-3.5 py-3 bg-slate-950/40 ${
                  isPasswordFocused ? "border-indigo-500 bg-slate-950/80" : "border-slate-800"
                }`}
              >
                <Feather name="shield" size={20} color={isPasswordFocused ? "#6366F1" : "#64748B"} />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#64748B"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className="flex-1 text-slate-100 text-base font-normal ml-3 p-0"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  activeOpacity={0.7}
                  className="p-1"
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password Link */}
            <View className="items-end mb-6">
              <Link href="/auth/forgot-password" asChild>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text className="text-indigo-400 font-semibold text-sm">
                    ¿Olvidó su contraseña?
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              activeOpacity={0.85}
              className="bg-indigo-600 rounded-xl py-3.5 mb-6 items-center shadow-lg shadow-indigo-950/50"
            >
              <Text className="text-white font-bold text-base">Iniciar Sesión</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-6">
              <View className="flex-1 h-[1px] bg-slate-800" />
              <Text className="text-slate-500 text-xs px-3 font-medium">
                O CONTINÚA CON
              </Text>
              <View className="flex-1 h-[1px] bg-slate-800" />
            </View>

            {/* Social Logins */}
            <View className="flex-row gap-3 mb-6">
              {/* Google Button */}
              <TouchableOpacity
                onPress={() => handleSocialLogin("Google")}
                activeOpacity={0.8}
                className="flex-1 flex-row items-center justify-center border border-slate-800 rounded-xl py-3 bg-slate-900"
              >
                <FontAwesome name="google" size={18} color="#EA4335" />
                <Text className="text-slate-200 font-semibold text-sm ml-2">
                  Google
                </Text>
              </TouchableOpacity>

              {/* GitHub Button */}
              <TouchableOpacity
                onPress={() => handleSocialLogin("GitHub")}
                activeOpacity={0.8}
                className="flex-1 flex-row items-center justify-center border border-slate-800 rounded-xl py-3 bg-slate-900"
              >
                <FontAwesome name="github" size={18} color="#E2E8F0" />
                <Text className="text-slate-200 font-semibold text-sm ml-2">
                  GitHub
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center items-center mt-2">
              <Text className="text-slate-400 text-sm">¿Aún no tienes cuenta? </Text>
              <Link href="/auth/register" asChild>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text className="text-indigo-400 font-bold text-sm">
                    Regístrate
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
