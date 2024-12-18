import axios from 'axios';
import { Actions, StateParams } from './base';
import { DeviceType } from './types';

function initActions({getStore, getActions, setStore}: StateParams): Actions {
    return {
        setDeviceType() {
            const width = window.innerWidth;
            
            let currentDeviceType : DeviceType;
            if (width <= 768) {
                currentDeviceType = DeviceType.MOBILE;
            } else if (width <= 1024) {
                currentDeviceType = DeviceType.TABLET;
            } else if (width <= 1920) {
                currentDeviceType = DeviceType.LAPTOP;
            } else {
                currentDeviceType = DeviceType.DESKTOP;
            }
            
            setStore({ currentDevice: currentDeviceType })
        },
        sanitizeInput(s: string): string {
            const sanitized = s.replace(/<[^>]*>?/gm, ""); // Quita cualquier cosa entre <>
            return sanitized;
        },
        autoLogin() {
            
        },
        contactWpp() {
            const phoneNumber = '+59893649367';
            const mensaje = 'Buenas, quisiera comprar este producto. ¿Está disponible?';
            const url = `https://wa.me/${phoneNumber}?text=${mensaje}`;
            window.open(url, '_blank');
        },

        // fetchItemById() {
        // async fetchItemById(id: string) {
        //     try {
        //         const response = await axios.get(`/api/items/${id}`);
        //         setStore({ currentItem: response.data });
        //     } catch (error) {
        //         console.error("Error al traer item por ID:", error);
        //     }
        // }
        // },
    };
};

export { initActions };