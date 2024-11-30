export const colors = {
    white: { r: 255, g: 255, b: 255, alpha: 1 },
    black: { r: 0, g: 0, b: 0, alpha: 1 },
    gray: { r: 107, g: 114, b: 128, alpha: 1 },      // Tailwind gray-500
    lightgray: { r: 209, g: 213, b: 219, alpha: 1 }, // Tailwind gray-300
    darkgray: { r: 75, g: 85, b: 99, alpha: 1 },     // Tailwind gray-600
    red: { r: 239, g: 68, b: 68, alpha: 1 },         // Tailwind red-500
    green: { r: 34, g: 197, b: 94, alpha: 1 },       // Tailwind green-500
    blue: { r: 59, g: 130, b: 246, alpha: 1 },       // Tailwind blue-500
    yellow: { r: 234, g: 179, b: 8, alpha: 1 },      // Tailwind yellow-500
    cyan: { r: 6, g: 182, b: 212, alpha: 1 },        // Tailwind cyan-500
    magenta: { r: 217, g: 70, b: 239, alpha: 1 },    // Tailwind fuchsia-500
    purple: { r: 168, g: 85, b: 247, alpha: 1 },     // Tailwind purple-500
    orange: { r: 249, g: 115, b: 22, alpha: 1 },     // Tailwind orange-500
    pink: { r: 236, g: 72, b: 153, alpha: 1 },       // Tailwind pink-500
    brown: { r: 180, g: 83, b: 9, alpha: 1 },        // Tailwind amber-700
    navy: { r: 30, g: 58, b: 138, alpha: 1 },        // Tailwind blue-900
    teal: { r: 20, g: 184, b: 166, alpha: 1 },       // Tailwind teal-500
    maroon: { r: 185, g: 28, b: 28, alpha: 1 },      // Tailwind red-900
    olive: { r: 84, g: 112, b: 8, alpha: 1 }         // ~ olive-700
};

// Mappa dei colori per Tailwind UI
export const tailwindColors = {
    white: { ...colors.white, bg: 'bg-white border border-gray-200' },
    black: { ...colors.black, bg: 'bg-black' },
    gray: { ...colors.gray, bg: 'bg-gray-500' },
    lightgray: { ...colors.lightgray, bg: 'bg-gray-300' },
    darkgray: { ...colors.darkgray, bg: 'bg-gray-600' },
    red: { ...colors.red, bg: 'bg-red-500' },
    green: { ...colors.green, bg: 'bg-green-500' },
    blue: { ...colors.blue, bg: 'bg-blue-500' },
    yellow: { ...colors.yellow, bg: 'bg-yellow-500' },
    cyan: { ...colors.cyan, bg: 'bg-cyan-500' },
    magenta: { ...colors.magenta, bg: 'bg-fuchsia-500' },
    purple: { ...colors.purple, bg: 'bg-purple-500' },
    orange: { ...colors.orange, bg: 'bg-orange-500' },
    pink: { ...colors.pink, bg: 'bg-pink-500' },
    brown: { ...colors.brown, bg: 'bg-amber-700' },
    navy: { ...colors.navy, bg: 'bg-blue-900' },
    teal: { ...colors.teal, bg: 'bg-teal-500' },
    maroon: { ...colors.maroon, bg: 'bg-red-900' },
    olive: { ...colors.olive, bg: 'bg-olive-700' }
};