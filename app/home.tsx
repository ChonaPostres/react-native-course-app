import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, SafeAreaView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';

// Mock Data para Categorías
const CATEGORIES = ['Todos', 'Teclados', 'Ratones', 'Audio', 'Monitores', 'Sillas'];

// Mock Data para Productos
const PRODUCTS = [
  {
    id: '1',
    name: 'Teclado Mecánico RGB Pro',
    price: 129.99,
    category: 'Teclados',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Mouse Inalámbrico Ultra',
    price: 89.99,
    category: 'Ratones',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1527814050087-379381547946?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Audífonos 7.1 Surround',
    price: 149.99,
    category: 'Audio',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Monitor Curvo 144Hz',
    price: 349.99,
    category: 'Monitores',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop',
  },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-12 pb-4">
        <View>
          <Text className="text-slate-400 text-sm font-medium">Bienvenido,</Text>
          <Text className="text-white text-2xl font-bold">Gamer Store</Text>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity 
            className="bg-slate-900 p-3 rounded-full border border-slate-800"
            onPress={() => setIsUserMenuVisible(true)}
          >
            <Feather name="user" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity className="relative bg-slate-900 p-3 rounded-full border border-slate-800">
            <Feather name="shopping-cart" size={22} color="#fff" />
            {/* Badge del Carrito */}
            <View className="absolute -top-1 -right-1 bg-indigo-500 rounded-full w-5 h-5 items-center justify-center border-2 border-slate-950">
              <Text className="text-white text-[10px] font-bold">2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View className="px-6 mb-6">
        <View className="flex-row items-center bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3">
          <Feather name="search" size={20} color="#64748B" />
          <TextInput
            placeholder="Buscar accesorios..."
            placeholderTextColor="#64748B"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 text-slate-200 ml-3 text-base"
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories (Horizontal Menu) */}
        <View className="mb-6">
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <TouchableOpacity
                  key={category}
                  onPress={() => setActiveCategory(category)}
                  activeOpacity={0.7}
                  className={`px-5 py-2.5 rounded-full border ${
                    isActive 
                      ? 'bg-indigo-600 border-indigo-500 shadow-sm shadow-indigo-500/50' 
                      : 'bg-slate-900 border-slate-800'
                  }`}
                >
                  <Text className={`${isActive ? 'text-white font-bold' : 'text-slate-400 font-medium'}`}>
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Popular Section Title */}
        <View className="px-6 flex-row justify-between items-center mb-4">
          <Text className="text-white text-lg font-bold">Tendencias</Text>
          <TouchableOpacity>
            <Text className="text-indigo-400 text-sm font-semibold">Ver todo</Text>
          </TouchableOpacity>
        </View>

        {/* Product Grid */}
        <View className="px-6 flex-row flex-wrap justify-between pb-8">
          {filteredProducts.map((product) => (
            <View 
              key={product.id} 
              className="w-[48%] bg-slate-900 rounded-2xl p-3 mb-4 border border-slate-800"
            >
              {/* Product Image */}
              <View className="w-full h-32 rounded-xl mb-3 overflow-hidden bg-slate-800">
                <Image 
                  source={{ uri: product.image }} 
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              
              {/* Rating */}
              <View className="flex-row items-center mb-1">
                <Feather name="star" size={12} color="#FBBF24" />
                <Text className="text-slate-400 text-xs ml-1 font-medium">{product.rating}</Text>
              </View>

              {/* Title */}
              <Text className="text-slate-200 font-bold text-sm mb-2" numberOfLines={2}>
                {product.name}
              </Text>

              {/* Price and Add Button */}
              <View className="flex-row items-center justify-between mt-auto">
                <Text className="text-indigo-400 font-extrabold text-base">
                  ${product.price}
                </Text>
                <TouchableOpacity 
                  className="bg-indigo-600 w-8 h-8 rounded-full items-center justify-center shadow-sm shadow-indigo-600/50"
                  activeOpacity={0.8}
                >
                  <Feather name="plus" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Bottom Sheet Menu (User Options) */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isUserMenuVisible}
        onRequestClose={() => setIsUserMenuVisible(false)}
      >
        <TouchableOpacity 
          className="flex-1 justify-end bg-slate-950/80"
          activeOpacity={1}
          onPressOut={() => setIsUserMenuVisible(false)}
        >
          <TouchableWithoutFeedback>
            <View className="bg-slate-900 rounded-t-3xl border-t border-slate-800 p-6 pb-12 shadow-2xl">
              <View className="w-12 h-1.5 bg-slate-700 rounded-full self-center mb-6" />
              <Text className="text-white text-xl font-bold mb-2">Mi Cuenta</Text>
              
              <TouchableOpacity className="flex-row items-center py-4 border-b border-slate-800/80">
                <View className="w-10 h-10 bg-indigo-950/50 rounded-full items-center justify-center mr-4 border border-indigo-900/30">
                  <Feather name="user" size={20} color="#818CF8" />
                </View>
                <Text className="text-slate-200 text-base font-medium">Ver Perfil</Text>
                <Feather name="chevron-right" size={20} color="#475569" style={{ marginLeft: 'auto' }} />
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center py-4 border-b border-slate-800/80">
                <View className="w-10 h-10 bg-emerald-950/50 rounded-full items-center justify-center mr-4 border border-emerald-900/30">
                  <Feather name="package" size={20} color="#34D399" />
                </View>
                <Text className="text-slate-200 text-base font-medium">Mis Pedidos</Text>
                <Feather name="chevron-right" size={20} color="#475569" style={{ marginLeft: 'auto' }} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="flex-row items-center py-4 mt-2"
                onPress={() => {
                  setIsUserMenuVisible(false);
                  router.replace('/auth/login');
                }}
              >
                <View className="w-10 h-10 bg-rose-950/50 rounded-full items-center justify-center mr-4 border border-rose-900/30">
                  <Feather name="log-out" size={20} color="#F87171" />
                </View>
                <Text className="text-rose-400 text-base font-bold">Cerrar Sesión</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}
