
export interface Bank {
    name: string
    slug: string
    code: string
    ussd: string
    logo: string
}



import { writable } from "svelte/store";


export const banks = writable<Bank[]>([]);

export async function fetchBanks(){
    const response = await fetch('https://nigerianbanks.xyz');
    const data: Bank[] = await response.json();
    banks.set(data);
}