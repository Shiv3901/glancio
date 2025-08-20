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
                ${this.getCameraFootage()}
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
                    <div class="flex items-start justify-between mb-8">
                        <!-- Store Selector -->
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span class="text-white text-lg">🏪</span>
                            </div>
                            <div>
                                <label class="text-sm font-medium text-gray-600 block mb-1">Store Location</label>
                                <select id="store-selector" class="bg-white border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-blue-500 transition-colors shadow-sm min-w-[200px]">
                                    <option value="demo">🏢 Demo Store</option>
                                    <option value="demo-retail">🛍️ Demo Retail Store</option>
                                    <option value="demo-hospitality">🏨 Demo Hospitality Venue</option>
                                    <option value="demo-airport">✈️ Demo Airport</option>
                                    <option value="demo-shopping-centre">🏬 Demo Shopping Centre</option>
                                    <option value="times-square">🗽 Times Square NYC *</option>
                                    <option value="dublin-street">🍀 Dublin Street *</option>
                                </select>
                            </div>
                        </div>
                        
                        <!-- Privacy Note -->
                        <div class="mt-3 px-2">
                            <p class="text-xs text-gray-500 italic">* Data anonymized for privacy protection</p>
                        </div>
                        
                        <!-- Live Status -->
                        <div class="flex items-center space-x-2 text-sm text-gray-500 mt-8">
                            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span class="font-medium">Live data • Updated ${new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                    
                    <div class="text-center">
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
                            <h3 id="visitors-today" class="text-3xl font-bold text-gray-900 mb-2">847</h3>
                            <p class="text-gray-600 font-medium">Today's Visitors</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Yesterday: <span id="visitors-yesterday" class="font-medium text-gray-700">756</span></div>
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
                            <h3 id="dwell-time" class="text-3xl font-bold text-gray-900 mb-2">3.4m</h3>
                            <p class="text-gray-600 font-medium">Avg. Dwell Time</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Yesterday: <span id="dwell-time-yesterday" class="font-medium text-gray-700">3.1m</span></div>
                                <div id="dwell-time-benchmark" class="text-xs text-green-600 mt-1">↗ 13% above industry avg (3.0m)</div>
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
                            <h3 id="conversion-rate" class="text-3xl font-bold text-gray-900 mb-2">24.3%</h3>
                            <p class="text-gray-600 font-medium">Conversion Rate</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Yesterday: <span id="conversion-rate-yesterday" class="font-medium text-gray-700">24.8%</span></div>
                                <div id="conversion-benchmark" class="text-xs text-green-600 mt-1">↗ 8% above industry avg (22.5%)</div>
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
                            <h3 id="peak-traffic" class="text-3xl font-bold text-gray-900 mb-2">183</h3>
                            <p class="text-gray-600 font-medium">Peak Hour Traffic</p>
                            <div class="mt-4 pt-4 border-t border-gray-100">
                                <div class="text-sm text-gray-500">Status: <span id="peak-status" class="font-medium text-orange-600">High Activity</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getCameraFootage() {
        return `
            <section class="px-4 py-12">
                <div class="container">
                    <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center justify-between mb-8">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <span class="text-white text-lg">📹</span>
                                </div>
                                <h3 class="text-xl font-bold text-gray-900">Live Camera Footage</h3>
                            </div>
                            <div class="flex items-center space-x-2 bg-red-50 px-3 py-1 rounded-full">
                                <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span class="text-red-700 text-sm font-medium">LIVE</span>
                            </div>
                        </div>
                        
                        <div class="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                            <div class="aspect-video">
                                <iframe id="camera-feed" class="w-full h-full" 
                                        src="https://www.youtube.com/embed/YMHt_FxReqw?autoplay=1&mute=1&loop=1&playlist=YMHt_FxReqw&controls=0&showinfo=0&rel=0&modestbranding=1" 
                                        title="Live Camera Feed" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                            
                            <!-- Camera overlay info -->
                            <div class="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span class="text-sm font-medium">Main Floor - Camera 1</span>
                                </div>
                            </div>
                            
                            <div class="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                                <div class="text-sm font-medium">${new Date().toLocaleTimeString()}</div>
                            </div>
                            
                            <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                                <div class="text-xs">Quality: 1080p • FPS: 30</div>
                            </div>
                        </div>
                        
                        <!-- Camera controls -->
                        <div class="flex items-center justify-between mt-6">
                            <div class="flex items-center space-x-4">
                                <button class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                                    📹 Camera 1
                                </button>
                                <button class="bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors text-sm">
                                    📹 Camera 2
                                </button>
                                <button class="bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors text-sm">
                                    📹 Camera 3
                                </button>
                            </div>
                            <div class="flex items-center space-x-2 text-sm text-gray-600">
                                <span>🎥 3 cameras active</span>
                                <span>•</span>
                                <span>📊 Recording analytics</span>
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
                                        
                                        <!-- Zone Overlay Labels and UI Elements -->
                                        <div class="absolute inset-0 pointer-events-none">
                                            <!-- Dynamic venue layout labels -->
                                            <div id="venue-layout-labels">
                                                <!-- Labels will be populated dynamically based on venue type -->
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
                                <div id="zone-performance" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <!-- Zone performance will be populated dynamically -->
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
                                <select id="demographics-period" class="bg-white border-2 border-gray-200 rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus:border-blue-500 transition-colors">
                                    <option value="today">Today</option>
                                    <option value="week">This Week</option>
                                    <option value="month">This Month</option>
                                </select>
                            </div>

                            <!-- Age Distribution -->
                            <div class="mb-8">
                                <h4 class="text-lg font-bold text-gray-900 mb-6">Age Distribution</h4>
                                <div class="space-y-4">
                                    <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">18-25 years</span>
                                            <span id="age-18-25" class="font-bold text-blue-600">32%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div id="age-18-25-bar" class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm" style="width: 32%"></div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">26-35 years</span>
                                            <span id="age-26-35" class="font-bold text-purple-600">28%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div id="age-26-35-bar" class="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full shadow-sm" style="width: 28%"></div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">36-45 years</span>
                                            <span id="age-36-45" class="font-bold text-green-600">24%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div id="age-36-45-bar" class="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full shadow-sm" style="width: 24%"></div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-medium text-gray-700">46+ years</span>
                                            <span id="age-46-plus" class="font-bold text-orange-600">16%</span>
                                        </div>
                                        <div class="w-full bg-white rounded-full h-3 shadow-inner">
                                            <div id="age-46-plus-bar" class="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full shadow-sm" style="width: 16%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Gender Distribution -->
                            <div class="pt-6 border-t border-gray-200">
                                <h4 class="text-lg font-bold text-gray-900 mb-6">Gender Distribution</h4>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                                        <div id="gender-female" class="text-4xl font-bold text-pink-600 mb-2">58%</div>
                                        <div class="text-gray-700 font-medium">👩 Female</div>
                                    </div>
                                    <div class="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                        <div id="gender-male" class="text-4xl font-bold text-blue-600 mb-2">42%</div>
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
                        <div id="customer-journey-section" class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
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

            <!-- Business Insights Section -->
            <section class="px-4 pb-12">
                <div class="container">
                    <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center space-x-3 mb-8">
                            <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                                <span class="text-white text-lg">💡</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Business Insights</h3>
                        </div>
                        
                        <div id="business-insights" class="space-y-6">
                            <!-- Business insights will be populated dynamically based on venue type -->
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
                        <div class="flex items-center space-x-3 mb-8">
                            <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <span class="text-white text-lg">🔔</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Recent Activity & Alerts</h3>
                        </div>
                        
                        <div class="space-y-4">
                            <!-- Live Alert -->
                            <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-xl shadow-lg transition-all duration-300" data-activity="alert1">
                                <div class="p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" data-toggle="alert1">
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
                                        <div class="flex items-center space-x-2">
                                            <div class="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">View Details</div>
                                            <div id="alert1-chevron" class="text-gray-500 transform transition-transform duration-300">▼</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="alert1-details" class="hidden border-t border-red-200 bg-red-25 p-6">
                                    <!-- Details will be populated here -->
                                </div>
                            </div>

                            <!-- Recent Activities -->
                            <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-lg transition-all duration-300" data-activity="activity1">
                                <div class="p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" data-toggle="activity1">
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
                                        <div class="flex items-center space-x-2">
                                            <div class="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">View Details</div>
                                            <div id="activity1-chevron" class="text-gray-500 transform transition-transform duration-300">▼</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="activity1-details" class="hidden border-t border-blue-200 bg-blue-25 p-6">
                                    <!-- Details will be populated here -->
                                </div>
                            </div>

                            <div class="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl shadow-lg transition-all duration-300" data-activity="activity2">
                                <div class="p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" data-toggle="activity2">
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
                                        <div class="flex items-center space-x-2">
                                            <div class="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">View Details</div>
                                            <div id="activity2-chevron" class="text-gray-500 transform transition-transform duration-300">▼</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="activity2-details" class="hidden border-t border-green-200 bg-green-25 p-6">
                                    <!-- Details will be populated here -->
                                </div>
                            </div>

                            <div class="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl shadow-lg transition-all duration-300" data-activity="activity3">
                                <div class="p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" data-toggle="activity3">
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
                                        <div class="flex items-center space-x-2">
                                            <div class="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">View Details</div>
                                            <div id="activity3-chevron" class="text-gray-500 transform transition-transform duration-300">▼</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="activity3-details" class="hidden border-t border-purple-200 bg-purple-25 p-6">
                                    <!-- Details will be populated here -->
                                </div>
                            </div>

                            <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl shadow-lg transition-all duration-300" data-activity="activity4">
                                <div class="p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" data-toggle="activity4">
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
                                        <div class="flex items-center space-x-2">
                                            <div class="text-gray-500 text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">View Details</div>
                                            <div id="activity4-chevron" class="text-gray-500 transform transition-transform duration-300">▼</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="activity4-details" class="hidden border-t border-yellow-200 bg-yellow-25 p-6">
                                    <!-- Details will be populated here -->
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