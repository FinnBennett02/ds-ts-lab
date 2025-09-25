import {Friend, Colleague, EmailContact, FriendName } from './myTypes'
import { friends } from './01-basics'
import { colleagues } from './01-basics'
//console.log(older(friends[0]))
//console.log(allOlder(friends))

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}



function allOlder(f: Friend[]) {
    for (let i = 0; i < f.length; i++) {
        f[i].age += 1
    }
    return f.map(f => `${f.name} is now ${f.age}`)
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
 // console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[],name: string,department: string,email: string): Colleague {

    const highest = highestExtension(cs);

    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highestExtension(cs).contact.extension + 1
        }
    };
    cs.push(newColleague);
    return newColleague;
}

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
  ): EmailContact[] {
    let end = colleagues.length;
    if(max !== undefined) {
      end = max <2 ? 1 : max;
    }
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }

  
  // console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  // console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  // console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


function findFriends(friend: Friend[],criterion: (friend: Friend) => boolean): FriendName[] {
  const filtered = friend.filter(criterion);
  const result: FriendName[] = filtered.map((f) => ({ name: f.name }));
  return result;
}

// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));


function addInterest(friends: Friend,interests: string): string[] {
if (!friends.interests) {
  friends.interests = [];
}
friends.interests.push(interests);
return friends.interests;
}
console.log(addInterest(friends[1], 'Politics'));
