import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics'
import { colleagues } from './01-basics'
console.log(older(friends[0]))
console.log(allOlder(friends))

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}



function allOlder(f: Friend[]) : string[] {
    for (let i = 0; i < f.length; i++) {
        f[i].age += 1
    }
    return f.map(f => `${f.name} is now ${f.age}`)
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

function addColleague(
    cs: Colleague[],
    name: string,
    department: string,
    email: string
): Colleague {
    const highest = cs.reduce(
        (max, c) => Math.max(max, c.contact.extension),
        0
    );
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highest + 1
        }
    };
    cs.push(newColleague);
    return newColleague;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));