import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        data-slot="avatar"
        className={`relative flex size-8 shrink-0 overflow-hidden rounded-full ${
            className || ""
        }`}
        {...props}
    />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        data-slot="avatar-image"
        className={`aspect-square size-full ${className || ""}`}
        {...props}
    />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        data-slot="avatar-fallback"
        className={`bg-muted flex size-full items-center justify-center rounded-full ${
            className || ""
        }`}
        {...props}
    />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
