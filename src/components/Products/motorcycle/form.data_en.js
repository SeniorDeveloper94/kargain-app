import { SelectOptionsUtils } from '../../../libs/formFieldsUtils'

export const RadioTypeFunction = [
    {
        label: 'Chopper',
        value: 'chopper'
    },
    {
        label: 'Cruiser',
        value: 'cruiser'
    },
    {
        label: 'Touring',
        value: 'touring'
    },
    {
        label: 'Quad',
        value: 'quad'
    },
    {
        label: 'Snowmobile',
        value: 'snowmobile'
    },
    {
        label: 'Sportbike',
        value: 'sportbike'
    },
    {
        label: 'Light Motorcycle',
        value: 'light-motorcycle'
    },
    {
        label: 'Mini Bike',
        value: 'mini-bike'
    },
    {
        label: 'Scooter',
        value: 'scooter'
    },
    {
        label: 'Motosport',
        value: 'motosport'
    },
    {
        label: 'Classic Motorcycle',
        value: 'classic-motorcycle'
    },
    {
        label: 'Other',
        value: 'other'
    }
]

export const RadioChoicesEngine = [
    {
        label: 'Automatic',
        value: 'automatic'
    },
    {
        label: 'Manual',
        value: 'manual'
    },
    {
        label: 'Semi-automatic',
        value: 'semi-auto'
    }
]
export const CheckboxOptionsEquipments = SelectOptionsUtils([

    'ABS', 'Bluetooth',
    'CD', 'MP3', 'USB', 'Start / Stop system',
    'Cruise Control', 'Soundsystem',
    'Windshield', 'Travel bags', 'Catalytic converter', 'Kickstarter',
    'Topcase', 'Seat Heating', 'Handicapped enabled', 'Passenger folder',
    'Grips heating', 'Crash bar', 'Trailer hitch', 'Alarm', 'Wide tire kit'
])

export const RadioChoicesExternalColor = [
    {
        value: 'black',
        label: 'Black'
    },
    {
        value: 'gray',
        label: 'Gray'
    },
    {
        value: 'white',
        label: 'White'
    },
    {
        value: 'vert',
        label: 'Vert'
    },
    {
        value: 'beige',
        label: 'Beige'
    },
    {
        value: 'gold',
        label: 'Gold'
    },
    {
        value: 'brown',
        label: 'Brown'
    },
    {
        value: 'orange',
        label: 'Orange'
    },
    {
        value: 'bronze',
        label: 'Bronze'
    },
    {
        value: 'purple',
        label: 'Purple'
    },
    {
        value: 'blue',
        label: 'Blue'
    },
    {
        value: 'red',
        label: 'Red'
    },
    {
        value: 'silver',
        label: 'Silver'
    },
    {
        value: 'yellow',
        label: 'Yellow'
    },
    {
        value: 'other',
        label: 'Other'
    }
]

export const RadioChoicesPaints = [
    {
        value: 'metallic',
        label: 'Metallic'
    },
    {
        value: 'other',
        label: 'Other'
    }
]

export const RadioChoicesMaterials = [
    {
        value: 'Alcantre',
        label: 'alcantre'
    },
    {
        value: 'Cuir',
        label: 'cuir'
    },
    {
        value: 'Cuir partiel',
        label: 'Cuir-partiel'
    },
    {
        value: 'Tissu',
        label: 'tissu'
    },
    {
        value: 'Velours',
        label: 'velours'
    },
    {
        value: 'Autre',
        label: 'autre'
    }
]

export const RadioFunctionVehicle = [
    {
        value: 'personal-car',
        label: 'V??hicule personel'
    },
    {
        value: 'driving-school-car',
        label: 'V??hicule auto-??cole'
    },
    {
        value: 'post-rental',
        label: 'Apr??s location'
    },
    {
        value: 'cab',
        label: 'Taxi'
    },
    {
        value: 'company-vehicle',
        label: 'V??hicule de soci??t??'
    },
    {
        value: 'demo-vehicle',
        label: 'V??hicule de d??monstration'
    },
    {
        value: 'Pre-save-vehicle',
        label: 'Pr??-enregistr??'
    }
]

export const RadioChoicesGas = [
    {
        label: 'Diesel',
        value: 'diesel'
    },
    {
        label: 'Gas',
        value: 'gas'
    },
    {
        label: 'Ethanol',
        value: 'ethanol'
    },
    {
        label: 'Electric',
        value: 'eletric'
    },
    {
        label: 'Hybrid / gasoline',
        value: 'hybrid-gas'
    },
    {
        label: 'Hydrogen',
        value: 'hydrogen'
    },
    {
        label: 'Liquified petroleum gas (LPG),',
        value: 'gpl'
    }
]
export const RadioVehicleGeneralState = SelectOptionsUtils([
    'Neuve',
    'Occasion',
    'Collection',
    'V??hicule auto-??cole',
    'Apr??s location',
    'Taxi',
    'V??hicule de soci??t??',
    'V??hicule de d??monstration',
    'Pr??-enregistr??'
])

export const mileageType = [
    {
        label: 'mileage',
        value: 'mi'
    },
    {
        label: 'kilometer',
        value: 'km'
    }
]