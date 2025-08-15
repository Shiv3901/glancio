// Dashboard Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class DashboardPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                ${this.getDashboardHeader()}
                ${this.getDashboardStats()}
                ${this.getDashboardCharts()}
                ${this.getRecentActivity()}
            </main>
            ${Footer.render()}
        `;
    }

    static getDashboardHeader() {
        return `
            <section class="bg-white/80 backdrop-blur-md shadow-xl border-b border-gray-200/50 px-4 py-8">
                <div class="container">
                    <div class="text-center">
                        <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4 justify-center">
                            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Live data • Updated ${new Date().toLocaleTimeString()}</span>
                        </div>
                        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                            Real-time insights from your retail space powered by glancio's AI-driven camera analytics
                        </p>
                    </div>
                </div>
            </section>
        `;
    }

    static getDashboardStats() {
        return `
            <section class="px-4 py-12">
                <div class="container">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Today's Visitors -->
                        <div class="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center justify-between mb-6">
                                <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg">
                                    <span class="text-white text-2xl">👥</span>
                                </div>
                                <div class="bg-green-50 px-3 py-1 rounded-full">
                                    <span class="text-green-700 text-sm font-semibold flex items-center">
                                        <span class="text-green-500 mr-1">↗</span>12%
                                    </span>
                                </div>
                            </div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">847</h3>
                            <p class="text-gray-600 font-medium">Today's Visitors</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Yesterday: <span class="font-medium text-gray-700">756</span></div>
                            </div>
                        </div>

                        <!-- Average Dwell Time -->
                        <div class="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center justify-between mb-6">
                                <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 shadow-lg">
                                    <span class="text-white text-2xl">⏱️</span>
                                </div>
                                <div class="bg-green-50 px-3 py-1 rounded-full">
                                    <span class="text-green-700 text-sm font-semibold flex items-center">
                                        <span class="text-green-500 mr-1">↗</span>8%
                                    </span>
                                </div>
                            </div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">3.4m</h3>
                            <p class="text-gray-600 font-medium">Avg. Dwell Time</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Yesterday: <span class="font-medium text-gray-700">3.1m</span></div>
                            </div>
                        </div>

                        <!-- Conversion Rate -->
                        <div class="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center justify-between mb-6">
                                <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 shadow-lg">
                                    <span class="text-white text-2xl">💰</span>
                                </div>
                                <div class="bg-red-50 px-3 py-1 rounded-full">
                                    <span class="text-red-700 text-sm font-semibold flex items-center">
                                        <span class="text-red-500 mr-1">↘</span>2%
                                    </span>
                                </div>
                            </div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">24.3%</h3>
                            <p class="text-gray-600 font-medium">Conversion Rate</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Yesterday: <span class="font-medium text-gray-700">24.8%</span></div>
                            </div>
                        </div>

                        <!-- Peak Hour -->
                        <div class="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                            <div class="flex items-center justify-between mb-6">
                                <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 shadow-lg">
                                    <span class="text-white text-2xl">🔥</span>
                                </div>
                                <div class="bg-blue-50 px-3 py-1 rounded-full">
                                    <span class="text-blue-700 text-sm font-semibold">2-4 PM</span>
                                </div>
                            </div>
                            <h3 class="text-3xl font-bold text-gray-900 mb-2">183</h3>
                            <p class="text-gray-600 font-medium">Peak Hour Traffic</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Status: <span class="font-medium text-orange-600">High Activity</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getDashboardCharts() {
        return `
            <section class="px-4 pb-12">
                <div class="container">
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <!-- Traffic Heatmap -->
                        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                            <div class="flex items-center justify-between mb-8">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                                        <span class="text-white text-lg">🗺</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-gray-900">Store Traffic Heatmap</h3>
                                </div>
                                <div class="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="text-green-700 text-sm font-medium">Live</span>
                                </div>
                            </div>
                            
                            <!-- Traffic Density Heatmap -->
                            <div class="mb-6">
                                <div class="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-2xl">
                                    <!-- Heatmap Container -->
                                    <div class="relative w-full h-80 bg-black rounded-xl shadow-inner overflow-hidden">
                                        <!-- Heatmap Grid -->
                                        <div class="absolute inset-0 grid grid-cols-20 grid-rows-16 gap-0">
                                            ${this.generateThermalHeatmap()}
                                        </div>
                                        
                                        <!-- Zone Overlay Labels -->
                                        <div class="absolute inset-0 pointer-events-none">
                                            <!-- Entrance Zone -->
                                            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                                                ENTRANCE
                                            </div>
                                            
                                            <!-- Zone A -->
                                            <div class="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                                                ZONE A
                                            </div>
                                            
                                            <!-- Zone B -->
                                            <div class="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                                                ZONE B
                                            </div>
                                            
                                            <!-- Checkout -->
                                            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                                                CHECKOUT
                                            </div>
                                            
                                            <!-- Live indicator -->
                                            <div class="absolute top-2 left-2 flex items-center space-x-2">
                                                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                <span class="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">LIVE</span>
                                            </div>
                                            
                                            <!-- Temperature scale -->
                                            <div class="absolute top-2 right-2 bg-black/70 p-2 rounded backdrop-blur-sm">
                                                <div class="text-white text-xs font-bold mb-1">People/m²</div>
                                                <div class="flex items-center space-x-1 text-xs">
                                                    <span class="text-blue-300">0</span>
                                                    <div class="w-12 h-2 bg-gradient-to-r from-blue-500 via-green-400 via-yellow-400 via-orange-400 to-red-500 rounded"></div>
                                                    <span class="text-red-300">15+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Thermal Legend -->
                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex items-center space-x-6">
                                        <div class="flex items-center space-x-2">
                                            <div class="w-4 h-4 bg-blue-500 rounded shadow-sm"></div>
                                            <span class="text-gray-700 font-medium text-sm">Cold (0-5 people)</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div class="w-4 h-4 bg-green-500 rounded shadow-sm"></div>
                                            <span class="text-gray-700 font-medium text-sm">Warm (5-10 people)</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div class="w-4 h-4 bg-yellow-400 rounded shadow-sm"></div>
                                            <span class="text-gray-700 font-medium text-sm">Hot (10-15 people)</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div class="w-4 h-4 bg-red-500 rounded shadow-sm"></div>
                                            <span class="text-gray-700 font-medium text-sm">Very Hot (15+ people)</span>
                                        </div>
                                    </div>
                                    <div class="text-gray-500 text-sm font-medium">Thermal density view</div>
                                </div>
                            </div>

                            <!-- Zone Performance -->
                            <div class="pt-6 border-t border-gray-200">
                                <h4 class="text-lg font-bold text-gray-900 mb-6">Zone Performance Today</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border-l-4 border-red-500">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span class="text-red-800 font-bold text-sm">🚪 ENTRANCE</span>
                                                <div class="text-red-600 text-xs mt-1">High Activity</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="font-bold text-red-600 text-lg">847</div>
                                                <div class="text-red-500 text-xs">visitors</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-500">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span class="text-green-800 font-bold text-sm">💳 CHECKOUT</span>
                                                <div class="text-green-600 text-xs mt-1">Converting Well</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="font-bold text-green-600 text-lg">206</div>
                                                <div class="text-green-500 text-xs">purchases</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border-l-4 border-orange-500">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span class="text-orange-800 font-bold text-sm">🛍️ ZONE A</span>
                                                <div class="text-orange-600 text-xs mt-1">Popular Products</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="font-bold text-orange-600 text-lg">623</div>
                                                <div class="text-orange-500 text-xs">visitors</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-xl border-l-4 border-yellow-500">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span class="text-yellow-800 font-bold text-sm">🏷️ ZONE B</span>
                                                <div class="text-yellow-600 text-xs mt-1">Needs Attention</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="font-bold text-yellow-600 text-lg">412</div>
                                                <div class="text-yellow-500 text-xs">visitors</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border-l-4 border-blue-500">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span class="text-blue-800 font-bold text-sm">👔 FITTING</span>
                                                <div class="text-blue-600 text-xs mt-1">Light Usage</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="font-bold text-blue-600 text-lg">89</div>
                                                <div class="text-blue-500 text-xs">uses</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border-l-4 border-gray-400">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <span class="text-gray-700 font-bold text-sm">🪑 SEATING</span>
                                                <div class="text-gray-600 text-xs mt-1">Rest Area</div>
                                            </div>
                                            <div class="text-right">
                                                <div class="font-bold text-gray-600 text-lg">34</div>
                                                <div class="text-gray-500 text-xs">visitors</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Customer Demographics -->
                        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                            <div class="flex items-center justify-between mb-8">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        <span class="text-white text-lg">👥</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-gray-900">Customer Demographics</h3>
                                </div>
                                <select class="bg-white border-2 border-gray-200 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:border-blue-500 transition-colors">
                                    <option>Today</option>
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>

                            <!-- Age Distribution -->
                            <div class="mb-8">
                                <h4 class="text-lg font-bold text-gray-900 mb-6">Age Distribution</h4>
                                <div class="space-y-4">
                                    <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">18-25 years</span>
                                            <span class="font-bold text-blue-600">32%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm" style="width: 32%"></div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">26-35 years</span>
                                            <span class="font-bold text-purple-600">28%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div class="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style="width: 28%"></div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">36-45 years</span>
                                            <span class="font-bold text-green-600">24%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div class="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full shadow-sm" style="width: 24%"></div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">46+ years</span>
                                            <span class="font-bold text-orange-600">16%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div class="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full shadow-sm" style="width: 16%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Gender Distribution -->
                            <div class="pt-6 border-t border-gray-200">
                                <h4 class="text-lg font-bold text-gray-900 mb-6">Gender Distribution</h4>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                                        <div class="text-4xl font-bold text-pink-600 mb-2">58%</div>
                                        <div class="text-gray-700 font-medium">👩 Female</div>
                                    </div>
                                    <div class="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                        <div class="text-4xl font-bold text-blue-600 mb-2">42%</div>
                                        <div class="text-gray-700 font-medium">👨 Male</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hourly Traffic Chart -->
                        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                            <div class="flex items-center justify-between mb-8">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                                        <span class="text-white text-lg">📈</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-gray-900">Today's Traffic Pattern</h3>
                                </div>
                                <div class="bg-orange-50 px-4 py-2 rounded-xl">
                                    <div class="text-sm text-orange-700 font-medium">Peak: 2-4 PM</div>
                                    <div class="text-xs text-orange-600">183 visitors/hour</div>
                                </div>
                            </div>
                            
                            <!-- Chart -->
                            <div class="mb-6">
                                <div class="h-64 flex items-end justify-between space-x-2 bg-gradient-to-t from-gray-50 to-transparent p-6 rounded-xl">
                                    ${this.generateTrafficChart()}
                                </div>
                            </div>
                            
                            <!-- Hours -->
                            <div class="flex justify-between text-sm font-medium text-gray-600 px-6">
                                <span>6AM</span>
                                <span>9AM</span>
                                <span>12PM</span>
                                <span>3PM</span>
                                <span>6PM</span>
                                <span>9PM</span>
                            </div>
                        </div>

                        <!-- Customer Journey Insights -->
                        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                            <div class="flex items-center space-x-3 mb-8">
                                <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <span class="text-white text-lg">🛍</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-900">Customer Journey Insights</h3>
                            </div>
                            
                            <!-- Journey Flow -->
                            <div class="space-y-6 mb-8">
                                <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                                    <div class="flex items-center space-x-4">
                                        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span class="text-white font-bold">1</span>
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="font-bold text-gray-900">Entrance → Product Zone A</span>
                                                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">73%</span>
                                            </div>
                                            <div class="text-sm text-gray-600">Average time: <span class="font-medium">45 seconds</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
                                    <div class="flex items-center space-x-4">
                                        <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span class="text-white font-bold">2</span>
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="font-bold text-gray-900">Product Zone A → Product Zone B</span>
                                                <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">66%</span>
                                            </div>
                                            <div class="text-sm text-gray-600">Average time: <span class="font-medium">2m 15s</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
                                    <div class="flex items-center space-x-4">
                                        <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span class="text-white font-bold">3</span>
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="font-bold text-gray-900">Product Zone B → Checkout</span>
                                                <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">50%</span>
                                            </div>
                                            <div class="text-sm text-gray-600">Average time: <span class="font-medium">1m 30s</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Key Insights -->
                            <div class="pt-6 border-t border-gray-200">
                                <h4 class="text-lg font-bold text-gray-900 mb-4">AI-Generated Insights</h4>
                                <div class="space-y-3">
                                    <div class="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                        <div class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span class="text-white text-xs font-bold">!</span>
                                        </div>
                                        <div class="text-sm">
                                            <span class="font-bold text-yellow-800">Drop-off at Product Zone B:</span>
                                            <span class="text-yellow-700"> Consider layout optimization or product placement review</span>
                                        </div>
                                    </div>
                                    <div class="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                                        <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span class="text-white text-xs">✓</span>
                                        </div>
                                        <div class="text-sm">
                                            <span class="font-bold text-green-800">Strong entrance conversion:</span>
                                            <span class="text-green-700"> Effective store front and window displays</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getRecentActivity() {
        return `
            <section class="px-4 pb-16">
                <div class="container">
                    <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center justify-between mb-8">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <span class="text-white text-lg">🔔</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-900">Recent Activity & Alerts</h3>
                            </div>
                            <button class="btn btn-secondary text-sm flex items-center space-x-2">
                                <span>📄</span>
                                <span>View All</span>
                            </button>
                        </div>
                        
                        <div class="space-y-4">
                            <!-- Live Alert -->
                            <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-xl shadow-lg">
                                <div class="flex items-start space-x-4">
                                    <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                        <span class="text-white text-sm">⚠</span>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-bold text-red-900">High Traffic Alert - Product Zone A</span>
                                            <span class="bg-red-200 text-red-800 px-2 py-1 rounded-full text-xs font-medium">2 min ago</span>
                                        </div>
                                        <div class="text-sm text-red-700">
                                            Unusual crowd density detected. Current: <span class="font-bold">45 people</span>, Normal: <span class="font-medium">15-25 people</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Recent Activities -->
                            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-200">
                                <div class="flex items-start space-x-4">
                                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span class="text-white text-sm">🛍</span>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-bold text-blue-900">Customer Journey Completed</span>
                                            <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">5 min ago</span>
                                        </div>
                                        <div class="text-sm text-blue-700">
                                            Female, 25-35 years, spent <span class="font-medium">4m 23s</span>, visited all zones
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-200">
                                <div class="flex items-start space-x-4">
                                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span class="text-white text-sm">📈</span>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-bold text-green-900">Peak Hour Threshold Reached</span>
                                            <span class="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-medium">12 min ago</span>
                                        </div>
                                        <div class="text-sm text-green-700">
                                            Traffic exceeded <span class="font-medium">150 visitors/hour</span>. Consider additional staff.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-200">
                                <div class="flex items-start space-x-4">
                                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span class="text-white text-sm">📄</span>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-bold text-purple-900">Weekly Report Generated</span>
                                            <span class="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">1 hour ago</span>
                                        </div>
                                        <div class="text-sm text-purple-700">
                                            Week of Dec 9-15: <span class="font-medium">8.2% increase</span> in foot traffic
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-yellow-200">
                                <div class="flex items-start space-x-4">
                                    <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span class="text-white text-sm">📹</span>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-bold text-yellow-900">Camera Calibration Needed</span>
                                            <span class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">3 hours ago</span>
                                        </div>
                                        <div class="text-sm text-yellow-700">
                                            Camera 4 (Product Zone B) may need recalibration for optimal tracking
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static generateThermalHeatmap() {
        const gridWidth = 20;
        const gridHeight = 16;
        let cells = '';
        
        // Define heat intensity patterns for different store areas
        const heatMap = [];
        
        // Initialize grid with base heat values
        for (let y = 0; y < gridHeight; y++) {
            heatMap[y] = [];
            for (let x = 0; x < gridWidth; x++) {
                heatMap[y][x] = 0.1; // Base heat level
            }
        }
        
        // Add heat sources with realistic retail patterns
        
        // Entrance area (bottom center) - very high heat
        for (let y = 12; y < gridHeight; y++) {
            for (let x = 8; x < 12; x++) {
                const distance = Math.sqrt(Math.pow(x - 10, 2) + Math.pow(y - 14, 2));
                heatMap[y][x] = Math.max(heatMap[y][x], Math.max(0, 1.0 - distance * 0.3));
            }
        }
        
        // Zone A (top left) - high heat with some variation
        for (let y = 2; y < 8; y++) {
            for (let x = 2; x < 8; x++) {
                const distance = Math.sqrt(Math.pow(x - 5, 2) + Math.pow(y - 5, 2));
                const intensity = Math.max(0, 0.85 - distance * 0.15 + Math.random() * 0.2);
                heatMap[y][x] = Math.max(heatMap[y][x], intensity);
            }
        }
        
        // Checkout area (top center) - high heat, focused
        for (let y = 1; y < 6; y++) {
            for (let x = 8; x < 12; x++) {
                const distance = Math.sqrt(Math.pow(x - 10, 2) + Math.pow(y - 3, 2));
                heatMap[y][x] = Math.max(heatMap[y][x], Math.max(0, 0.8 - distance * 0.2));
            }
        }
        
        // Zone B (top right) - medium heat
        for (let y = 2; y < 8; y++) {
            for (let x = 12; x < 18; x++) {
                const distance = Math.sqrt(Math.pow(x - 15, 2) + Math.pow(y - 5, 2));
                const intensity = Math.max(0, 0.6 - distance * 0.12 + Math.random() * 0.15);
                heatMap[y][x] = Math.max(heatMap[y][x], intensity);
            }
        }
        
        // Central walkway - medium heat corridor
        for (let y = 6; y < 12; y++) {
            for (let x = 8; x < 12; x++) {
                heatMap[y][x] = Math.max(heatMap[y][x], 0.4 + Math.random() * 0.2);
            }
        }
        
        // Add some random hotspots for realism
        const hotspots = [
            {x: 6, y: 9, intensity: 0.7},
            {x: 14, y: 10, intensity: 0.5},
            {x: 4, y: 11, intensity: 0.4},
            {x: 16, y: 8, intensity: 0.6}
        ];
        
        hotspots.forEach(spot => {
            for (let dy = -2; dy <= 2; dy++) {
                for (let dx = -2; dx <= 2; dx++) {
                    const y = spot.y + dy;
                    const x = spot.x + dx;
                    if (y >= 0 && y < gridHeight && x >= 0 && x < gridWidth) {
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const falloff = Math.max(0, 1 - distance * 0.3);
                        heatMap[y][x] = Math.max(heatMap[y][x], spot.intensity * falloff);
                    }
                }
            }
        });
        
        // Generate cells with thermal colors
        for (let y = 0; y < gridHeight; y++) {
            for (let x = 0; x < gridWidth; x++) {
                const intensity = Math.min(1, Math.max(0, heatMap[y][x]));
                const color = this.getHeatColor(intensity);
                const opacity = Math.max(0.3, intensity);
                
                cells += `<div class="w-full h-full ${color}" style="opacity: ${opacity}"></div>`;
            }
        }
        
        return cells;
    }
    
    static getHeatColor(intensity) {
        // Convert intensity (0-1) to thermal color
        if (intensity < 0.2) return 'bg-blue-900';
        else if (intensity < 0.35) return 'bg-blue-700';
        else if (intensity < 0.5) return 'bg-blue-500';
        else if (intensity < 0.65) return 'bg-green-500';
        else if (intensity < 0.75) return 'bg-yellow-400';
        else if (intensity < 0.85) return 'bg-orange-500';
        else if (intensity < 0.95) return 'bg-red-500';
        else return 'bg-red-600';
    }

    static generateTrafficChart() {
        const heights = [15, 25, 45, 68, 82, 95, 88, 76, 92, 100, 85, 72, 58, 45, 32, 28, 20, 15];
        let bars = '';
        
        heights.forEach((height, index) => {
            const isHighest = height === 100;
            const barColor = isHighest ? 'from-orange-500 to-red-500' : 'from-blue-500 to-blue-600';
            bars += `<div class="flex-1 bg-gradient-to-t ${barColor} rounded-t-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" style="height: ${height}%" title="${height}% capacity at hour ${index + 6}"></div>`;
        });
        
        return bars;
    }
}