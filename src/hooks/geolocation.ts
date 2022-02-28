import { useEffect, useState } from "react"

interface Location {
    latitude: number | null,
    longitude: number | null
}

export const useGeolocation = () => {
    const [coordinates, setCoordinates] = useState<Location>({
        latitude: null,
        longitude: null
    })

    const success = ({ coords }: GeolocationPosition) => {
        const { latitude, longitude } = coords
        setCoordinates({ latitude, longitude })
    };

    const error = () => {
        setCoordinates({ latitude: null, longitude: null })
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
            navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 })
        }
    }, [])
    return coordinates
}
