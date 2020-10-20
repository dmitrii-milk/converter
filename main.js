const res = JSON.stringify(
    {"units": [
    {"kilometers": {
        "abbreviation": "km",
        "measure": {
            "toKm": "*1",
            "toFt": "*3280.8",
            "toMeters": "*1000",
            "toInches": "*39370",
            "toCM": "*100000",
            "toYards": "*1093.6",
            "toMiles": "*0.62137",
            "toMm": "*1000000"
        }

    }},
    {"yards": {
        "abbreviation": "yd",
        "measure": {
            "toYd": "*1",
            "toFt": "*3",
            "toMeters": "/1.0936",
            "toInches": "*36",
            "toCM": "/0.010936",
            "toKm": "/1093.6",
            "toMiles": "*0.00056818",
            "toMm": "*914"
        }

    }},
    {"millimeter": {
        "abbreviation": "mm",
        "measure": {
            "toMm": "*1",
            "toYd": "/914",
            "toFt": "/305",
            "toMeters": "/1000",
            "toInches": "/25.4",
            "toCM": "/10",
            "toKm": "/1000000",
            "toMiles": "/1.609000000"
        }

    }}

]   
});

const newUnits = JSON.parse(res)

let jsonInputData = JSON.stringify({
    distance: {
                unit: 'm',
                value: '5'
            },
            convert_to: 'ft'
})
jsonInputData = JSON.parse(jsonInputData);

const {unit, value} = jsonInputData.distance;
const {convert_to} = jsonInputData;

class Units {
            constructor(m, ft, cm, inc) {
                this.m = m;
                this.ft = ft;
                this.cm = cm;
                this.inc = inc;
            }
}

const meters = new Units(1, 25, 0.01, 39.370);  
const feet =  new Units(3.2808, 1, 0.032808, 12); 
const cm =  new Units(100, 1, 0.032808, 0.39370); 
const inc =  new Units(39.370, 0.083333, 0.39370, 1);


function convert(value, unit, convert_to) {
    switch(unit){
        case "m":
            const result = value + meters[convert_to];
            console.log(result); 
        case "ft":
        case "cm":
        case "inc":
        case "km":
        case "yd":
        case "mm":
    }


}

convert(value, unit, convert_to)
