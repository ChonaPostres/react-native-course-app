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
import { Feather } from "@expo/vector-icons";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Custom focus states
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert(`Registro exitoso para: ${name}`);
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
                <Feather name="user-plus" size={28} color="#6366F1" />
              </View>
              <Text className="text-2xl font-bold text-white text-center">
                Crear una Cuenta
              </Text>
              <Text className="text-slate-400 text-sm mt-1 text-center">
                Regístrate para comenzar a comprar
              </Text>
            </View>

            {/* Name Field */}
            <View className="mb-4">
              <Text className="text-slate-300 text-sm font-medium mb-1.5 ml-1">
                Nombre Completo
              </Text>
              <View
                className={`flex-row items-center border rounded-xl px-3.5 py-3 bg-slate-950/40 ${
                  isNameFocused ? "border-indigo-500 bg-slate-950/80" : "border-slate-800"
                }`}
              >
                <Feather name="user" size={20} color={isNameFocused ? "#6366F1" : "#64748B"} />
                <TextInput
                  placeholder="Juan Pérez"
                  placeholderTextColor="#64748B"
                  value={name}
                  onChangeText={setName}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  className="flex-1 text-slate-100 text-base font-normal ml-3 p-0"
                />
              </View>
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
            <View className="mb-4">
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

            {/* Confirm Password Field */}
            <View className="mb-6">
              <Text className="text-slate-300 text-sm font-medium mb-1.5 ml-1">
                Confirmar Contraseña
              </Text>
              <View
                className={`flex-row items-center border rounded-xl px-3.5 py-3 bg-slate-950/40 ${
                  isConfirmPasswordFocused ? "border-indigo-500 bg-slate-950/80" : "border-slate-800"
                }`}
              >
                <Feather name="shield" size={20} color={isConfirmPasswordFocused ? "#6366F1" : "#64748B"} />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#64748B"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  onFocus={() => setIsConfirmPasswordFocused(true)}
                  onBlur={() => setIsConfirmPasswordFocused(false)}
                  className="flex-1 text-slate-100 text-base font-normal ml-3 p-0"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  activeOpacity={0.7}
                  className="p-1"
                >
                  <Feather
                    name={showConfirmPassword ? "eye" : "eye-off"}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Register Button */}
            <TouchableOpacity
              onPress={handleRegister}
              activeOpacity={0.85}
              className="bg-indigo-600 rounded-xl py-3.5 mb-6 items-center shadow-lg shadow-indigo-950/50"
            >
              <Text className="text-white font-bold text-base">Registrarse</Text>
            </TouchableOpacity>

            {/* Sign In Link */}
            <View className="flex-row justify-center items-center">
              <Text className="text-slate-400 text-sm">¿Ya tienes cuenta? </Text>
              <Link href="/auth/login" asChild>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text className="text-indigo-400 font-bold text-sm">
                    Inicia Sesión
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
