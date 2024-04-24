'use client';

import { redirect } from "next/navigation";


export default function NotFound() {
    return (
        redirect('/')
        // <h3>Page not found!</h3>
    )
}