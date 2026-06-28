import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

// The ultra-optimized WebP normal map from the reference
const WEBP_DISPLACEMENT_MAP = "data:image/webp;base64,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";

const glassButtonVariants = cva(
  "relative isolate inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-transform duration-300 ease-out tracking-tight disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 text-slate-900/90 dark:text-white/95",
  {
    variants: {
      size: {
        default: "px-6 py-3.5 text-base font-medium",
        sm: "px-4 py-2 text-sm font-medium",
        lg: "px-8 py-4 text-lg font-medium",
        icon: "h-10 w-10 p-0 gap-0",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const GlassButton = React.forwardRef(
  ({ className, children, size, contentClassName, glassColor, ...props }, ref) => {
    // Generate a unique ID so multiple buttons don't conflict with each other's SVG filters
    const filterId = React.useId().replace(/:/g, "");

    return (
      <>
        {/* INVISIBLE SVG FILTER DEFINITION */}
        <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <filter id={`liquid-glass-${filterId}`} primitiveUnits="objectBoundingBox">
            <feImage 
              result="map" 
              width="100%" 
              height="100%" 
              x="0" 
              y="0" 
              href={WEBP_DISPLACEMENT_MAP} 
              preserveAspectRatio="none" 
            />
            {/* The pre-blur helps smooth out the underlying image before refraction */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.01" result="blur" />
            <feDisplacementMap 
              id="disp" 
              in="blur" 
              in2="map" 
              scale="0.5" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </svg>

        <style>{`
          .btn-liquid-${filterId} {
            appearance: none;
            border: none;
            background: transparent;
            --glass-reflex-light: 1;
            --glass-reflex-dark: 1;
          }

          /* 
             THE LENS LAYER (-z-10)
             This must remain completely empty of content.
             Because it is empty, Chrome's backdrop-filter engine will only grab 
             the background behind the button, guaranteeing zero text-ghosting!
          */
          .btn-liquid-lens-${filterId} {
            /* If no glassColor is provided, default to a subtle, neutral frosted glass */
            background-color: ${glassColor || "oklch(from var(--foreground) l c h / 5%)"};
            
            /* Chrome/Edge mathematically refracts via the SVG. Safari falls back to blur. */
            backdrop-filter: blur(8px) url(#liquid-glass-${filterId}) saturate(150%);
            -webkit-backdrop-filter: blur(8px) saturate(150%);
            
            /* The intricate, highly realistic Box Shadow stack from the CodePen */
            box-shadow: 
              inset 0 0 0 1px color-mix(in srgb, white calc(var(--glass-reflex-light) * 10%), transparent),
              inset 1.8px 3px 0px -2px color-mix(in srgb, white calc(var(--glass-reflex-light) * 90%), transparent), 
              inset -2px -2px 0px -2px color-mix(in srgb, white calc(var(--glass-reflex-light) * 80%), transparent), 
              inset -3px -8px 1px -6px color-mix(in srgb, white calc(var(--glass-reflex-light) * 60%), transparent), 
              inset -0.3px -1px 4px 0px color-mix(in srgb, black calc(var(--glass-reflex-dark) * 12%), transparent), 
              inset -1.5px 2.5px 0px -2px color-mix(in srgb, black calc(var(--glass-reflex-dark) * 20%), transparent), 
              inset 0px 3px 4px -2px color-mix(in srgb, black calc(var(--glass-reflex-dark) * 20%), transparent), 
              inset 2px -6.5px 1px -4px color-mix(in srgb, black calc(var(--glass-reflex-dark) * 10%), transparent), 
              0px 1px 5px 0px color-mix(in srgb, black calc(var(--glass-reflex-dark) * 10%), transparent), 
              0px 6px 16px 0px color-mix(in srgb, black calc(var(--glass-reflex-dark) * 8%), transparent);
              
            transition: background-color 400ms cubic-bezier(1, 0.0, 0.4, 1), box-shadow 400ms cubic-bezier(1, 0.0, 0.4, 1);
          }

          /* Text Layer: Floats cleanly above the glass */
          .btn-liquid-text-${filterId} {
            text-shadow: 0 1px 2px oklch(from var(--background) l c h / 30%);
            transition: color 400ms cubic-bezier(1, 0.0, 0.4, 1);
          }
          
          /* Hover & Active Interactions */
          @media (hover: hover) {
            .btn-liquid-${filterId}:not(:disabled):hover {
              transform: scale(1.03);
            }
          }
          .btn-liquid-${filterId}:not(:disabled):active {
            transform: scale(0.96);
          }
        `}</style>
        
        <button
          className={cn(glassButtonVariants({ size }), `btn-liquid-${filterId}`, className)}
          ref={ref}
          {...props}
        >
          {/* ISOLATED BACKGROUND LENS */}
          <span className={`btn-liquid-lens-${filterId} absolute inset-0 -z-10 rounded-[inherit] pointer-events-none`} />

          {/* TEXT CONTENT (Composited safely ABOVE the backdrop filter) */}
          <span className={cn(`btn-liquid-text-${filterId} relative z-10 w-full flex items-center justify-center gap-[inherit] select-none`, contentClassName)}>
            {children}
          </span>
        </button>
      </>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
