import { writable } from 'svelte/store';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';

export const isSubscribed = persist(writable({ subscribed: false, email: '' }), createLocalStorage(), 'subscribed');
