import React from "react";

export function TypographyH1({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
            {...props}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={`scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}
            {...props}
        >
            {children}
        </h2>
    );
}

export function TypographyH3({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
            {...props}
        >
            {children}
        </h3>
    );
}

export function TypographyH4({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4
            className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
            {...props}
        >
            {children}
        </h4>
    );
}

export function TypographyP({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
            {...props}
        >
            {children}
        </p>
    );
}

export function TypographySmall({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <small
            className={`text-sm font-medium leading-none ${className}`}
            {...props}
        >
            {children}
        </small>
    );
}

export function TypographyBlockquote({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
    return (
        <blockquote
            className={`mt-6 border-l-2 pl-6 italic ${className}`}
            {...props}
        >
            {children}
        </blockquote>
    );
}

export function TypographyList({
    children,
    className = "",
    ...props
}: React.HTMLAttributes<HTMLUListElement>) {
    return (
        <ul
            className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}
            {...props}
        >
            {children}
        </ul>
    );
}
