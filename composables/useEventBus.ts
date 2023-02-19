import mitt from 'mitt'

type ApplicationEvents = {
    'closeSideNav': String
};

const emitter = mitt<ApplicationEvents>()

export const useEvent = emitter.emit
export const useListen = emitter.on