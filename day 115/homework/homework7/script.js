//let motorcycle = {   model: "Yamaha YZF-R7",   year: 2024,   specs: {     engine: {       type: "CP2 (Crossplane)",       displacement: "689cc",       horsepower: 73.4,       cooling: "Liquid-cooled"     },     chassis: {       frame: "Diamond frame",       suspension: {         front: "Inverted fork",         rear: "Link-type Monocross"       },       brakes: {         front: "Dual 298mm discs",         rear: "Single 245mm disc"       }     }   } } მოახდინეთ ამ ობიექტის დესტრუქცია მაქსიმალურად. 
let motorcycle = {
  model: "Yamaha YZF-R7",
  year: 2024,
  specs: {
    engine: {
      type: "CP2 (Crossplane)",
      displacement: "689cc",
      horsepower: 73.4,
      cooling: "Liquid-cooled"
    },
    chassis: {
      frame: "Diamond frame",
      suspension: {
        front: "Inverted fork",
        rear: "Link-type Monocross"
      },
      brakes: {
        front: "Dual 298mm discs",
        rear: "Single 245mm disc"
      }
    }
  }
}

let {
    model,
    year,
    specs: {
        engine: {
            type,
            displacement,
            horsepower,
            cooling
        },
        chassis: {
            frame,
            suspension: {
                front: frontSuspension,
                rear: rearSuspension
            },
            brakes: {
                front: frontBrake,
                rear: rearBrake
            }
        }
    }
} = motorcycle

console.log(model)
console.log(year)
console.log(type)
console.log(displacement)
console.log(horsepower)
console.log(cooling)
console.log(frame)
console.log(frontSuspension)
console.log(rearSuspension)
console.log(frontBrake)
console.log(rearBrake)