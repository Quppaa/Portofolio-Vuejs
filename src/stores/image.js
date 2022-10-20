import { defineStore } from "pinia";

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug: 'sensor rfid',
                title: 'Sensor RFID',
                img: 'Sensor RFID.jpeg'
            },
            {
                slug: 'sensor ultrasonik',
                title: 'Sensor ULTRASONIK',
                img: 'Sensor Ultrasonik.jpeg'
            },
            {
                slug: 'sensor ldr',
                title: 'Sensor LDR',
                img: 'Sensor LDR.jpeg'
            },
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
        g$detail: ({ list }) => {
            return (slug) => list.find((image) => image.slug === slug);
        }
    },
});

export default imageStore;