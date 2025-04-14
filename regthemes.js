const themes = {
    default: {
        "--primary": "#003366", // Deep Navy Blue
        "--primary-light": "#00509e", // Bright Ocean Blue
        "--primary-dark": "#001f4d", // Midnight Blue
        "--secondary": "#5ac8fa", // Sky Blue
        "--secondary-light": "#a3e4f7", // Pale Baby Blue
        "--secondary-dark": "#0077b6", // Deep Azure
        "--bg": "#f4f6f8", // Soft Light Grey
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#1a1a1a", // Deep Charcoal
        "--text-color-light": "#1a1a1a", // Deep Charcoal
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#00bfff", // Vivid Cyan
        "--accent-2": "#e0f7fa", // Icy Aqua
        "--accent-3": "#dde2e8", // Pale Grey-Blue
        "--hover-bg": "#001f4d", // Midnight Blue
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#cce6ff", // Light Sky Blue
        "--button-bg": "#003366", // Deep Navy
        "--button-hover-bg": "#00509e", // Ocean Blue
        "--highlight-bg": "#00509e", // Deep Ocean Blue (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#d1e8ff", // Pale Aqua to match the secondary color
    },
    fieryRed: {
        "--primary": "#930d0e", // Blood Red
        "--primary-light": "#c22c2c", // Bright Crimson
        "--primary-dark": "#7b0a0b", // Deep Maroon
        "--secondary": "#2a7a4e", // Forest Green
        "--secondary-light": "#66b59b", // Minty Green
        "--secondary-dark": "#1e5c3f", // Pine Green
        "--bg": "#f5fdf7", // Light Mint
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#333", // Dark Grey
        "--text-color-light": "#333", // Dark Grey
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#ff3333", // Crimson Red
        "--accent-2": "#ff9f9f", // Light Crimson
        "--accent-3": "#f4b6b6", // Pale Blush
        "--hover-bg": "#7b0a0b", // Deep Maroon
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#ffb3b3", // Soft Crimson
        "--button-bg": "#930d0e", // Blood Red
        "--button-hover-bg": "#c22c2c", // Bright Crimson
        "--highlight-bg": "#c22c2c", // Bright Crimson (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#f9d5d4", // Soft Rose to complement the theme
    },
    blushRose: {
        "--primary": "#e84393", // Fuchsia Pink
        "--primary-light": "#f56eb5", // Lavender
        "--primary-dark": "#b93372", // Berry Plum
        "--secondary": "#fab1a0", // Soft Peach
        "--secondary-light": "#ffcfb8", // Blush Peach
        "--secondary-dark": "#f28f75", // Coral Apricot
        "--bg": "#fceff9", // Light Pink Mist
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#6c2c5b", // Grape Purple
        "--text-color-light": "#6c2c5b", // Grape Purple
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#ff7f7f", // Soft Coral
        "--accent-2": "#ffb3b3", // Light Blush
        "--accent-3": "#ffdde1", // Soft Peachy Tint
        "--hover-bg": "#b93372", // Berry Plum
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#ffb3b3", // Soft Crimson
        "--button-bg": "#e84393", // Fuchsia Pink
        "--button-hover-bg": "#f56eb5", // Lavender
        "--highlight-bg": "#f56eb5", // Lavender (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#ffccd7", // Baby Pink to complement the primary
    },
    midnightDark: {
        "--primary": "#ff5252", // Neon Coral
        "--primary-light": "#ff7f7f", // Bubblegum Red
        "--primary-dark": "#e10000", // Bright Red
        "--secondary": "#00c896", // Bright Teal
        "--secondary-light": "#33e0b3", // Aqua Green
        "--secondary-dark": "#009c75", // Emerald Teal
        "--bg": "#1a1a1a", // Jet Black
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#eee", // Light Grey
        "--text-color-light": "#eee", // Light Grey
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#ff2d2d", // Fiery Red
        "--accent-2": "#ff4444", // Tomato Red
        "--accent-3": "#ff6b6b", // Light Coral
        "--hover-bg": "#e10000", // Bright Red
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#ffb3b3", // Soft Crimson
        "--button-bg": "#ff5252", // Neon Coral
        "--button-hover-bg": "#ff7f7f", // Bubblegum Red
        "--highlight-bg": "#ff7f7f", // Bubblegum Red (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#ffbdbd", // Light Coral to blend with the primary theme
    },
    sereneLavender: {
        "--primary": "#9b59b6", // Medium Purple
        "--primary-light": "#ab70c6", // Lavender
        "--primary-dark": "#7a478d", // Deep Violet
        "--secondary": "#dcd6f7", // Pale Lilac
        "--secondary-light": "#f1f0fe", // White Lilac
        "--secondary-dark": "#a5a1d8", // Dusty Purple
        "--bg": "#f6f0ff", // White Lavender
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#4a347f", // Deep Violet
        "--text-color-light": "#4a347f", // Deep Violet
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#d1a3d4", // Lavender Purple
        "--accent-2": "#d8b6e4", // Light Lilac
        "--accent-3": "#ebd9f1", // Soft Lavender
        "--hover-bg": "#7a478d", // Deep Violet
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#ffb3b3", // Soft Crimson
        "--button-bg": "#9b59b6", // Medium Purple
        "--button-hover-bg": "#ab70c6", // Lavender
        "--highlight-bg": "#ab70c6", // Lavender (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#f1e0f1", // Soft Lavender to complement the theme
    },
    oceanBreeze: {
        "--primary": "#0077b6", // Ocean Blue
        "--primary-light": "#66a6c9", // Sky Blue
        "--primary-dark": "#004f74", // Deep Sea Blue
        "--secondary": "#90e0ef", // Aquamarine
        "--secondary-light": "#b8efff", // Pale Aqua
        "--secondary-dark": "#60b6c8", // Cool Cyan
        "--bg": "#e0f7fa", // Icy Blue
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#003b5c", // Ocean Teal
        "--text-color-light": "#003b5c", // Ocean Teal
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#00b5e2", // Bright Cyan
        "--accent-2": "#a6e6f0", // Light Aqua
        "--accent-3": "#d1e8f3", // Soft Blue
        "--hover-bg": "#004f74", // Deep Sea Blue
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#b3e0ff", // Soft Blue
        "--button-bg": "#0077b6", // Ocean Blue
        "--button-hover-bg": "#66a6c9", // Sky Blue
        "--highlight-bg": "#66a6c9", // Sky Blue (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#b8efff", // Light Aqua to complement the theme
    },
    goldenSunset: {
        "--primary": "#f4a261", // Golden Yellow
        "--primary-light": "#ffb84d", // Sunburst
        "--primary-dark": "#d6892d", // Deep Gold
        "--secondary": "#ffecb3", // Soft Amber
        "--secondary-light": "#fff6d7", // Light Golden
        "--secondary-dark": "#e5b83f", // Warm Mustard
        "--bg": "#fef2d1", // Soft Yellow Tint
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#4f2f16", // Dark Coffee
        "--text-color-light": "#4f2f16", // Dark Coffee
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#ffb84d", // Sunburst Gold
        "--accent-2": "#ffd699", // Golden Glow
        "--accent-3": "#ffebcc", // Light Butter
        "--hover-bg": "#d6892d", // Deep Gold
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#ffdd7f", // Soft Sun
        "--button-bg": "#f4a261", // Golden Yellow
        "--button-hover-bg": "#ffb84d", // Sunburst
        "--highlight-bg": "#ffb84d", // Sunburst (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#ffd699", // Golden Glow to complement the primary
    },
    softStone: {
        "--primary": "#7f8c8d", // Slate Grey
        "--primary-light": "#95a5a6", // Light Slate
        "--primary-dark": "#5d6d7e", // Deep Grey
        "--secondary": "#d5dbdb", // Misty Grey
        "--secondary-light": "#f4f6f6", // Light Mist
        "--secondary-dark": "#aab7b8", // Greyed Blue
        "--bg": "#f2f4f4", // Off-White
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#2c3e50", // Dark Slate
        "--text-color-light": "#2c3e50", // Dark Slate
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#7f8c8d", // Slate Grey
        "--accent-2": "#d5dbdb", // Misty Grey
        "--accent-3": "#aab7b8", // Greyed Blue
        "--hover-bg": "#5d6d7e", // Deep Grey
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#c2cfd6", // Misty Grey
        "--button-bg": "#7f8c8d", // Slate Grey
        "--button-hover-bg": "#95a5a6", // Light Slate
        "--highlight-bg": "#95a5a6", // Light Slate (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#d5dbdb", // Misty Grey to complement the theme
    },
    softBlush: {
        "--primary": "#f7a7c2", // Soft Blush Pink
        "--primary-light": "#ffb8d3", // Light Blush
        "--primary-dark": "#d27a94", // Rosewood
        "--secondary": "#fce8f1", // Soft Pink Tint
        "--secondary-light": "#f8c7d9", // Light Blush Pink
        "--secondary-dark": "#e1a3b7", // Rose Tint
        "--bg": "#ffebf2", // Light Rose
        "--card-bg-light": "#f0f4f8", // Pale Grey-Blue
        "--card-bg-dark": "#1e2a38", // Charcoal Navy
        "--card-bg-muted": "#eaf1f9", // Dusty Blue Tint
        "--card-bg": "#f0f4f8", // Pale Grey-Blue
        "--text-color": "#6d3d47", // Deep Rose
        "--text-color-light": "#6d3d47", // Deep Rose
        "--text-color-dark": "#ffffff", // White
        "--accent-1": "#f7a7c2", // Soft Blush Pink
        "--accent-2": "#ffb8d3", // Light Blush
        "--accent-3": "#f8c7d9", // Light Blush Pink
        "--hover-bg": "#d27a94", // Rosewood
        "--hover-text": "#ffffff", // White
        "--section-bg": "#ffffff", // White
        "--section-border": "#ccc", // Light Grey
        "--mini-card-bg": "#e6f0fa", // Powder Blue
        "--mini-card-border": "#b0c4de", // Light Steel Blue
        "--mini-card-hover": "#ffb8d3", // Light Blush
        "--button-bg": "#f7a7c2", // Soft Blush Pink
        "--button-hover-bg": "#ffb8d3", // Light Blush
        "--highlight-bg": "#ffb8d3", // Light Blush (matching the primary light color)
        "--highlight-text-color": "#ffffff", // White for strong contrast
        "--highlight-context-color": "#f8c7d9", // Light Blush Pink to complement the theme
    }
};
