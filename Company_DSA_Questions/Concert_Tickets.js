
function concertTicketsBruteForce(tickets, customers) {
    const result = []
    
    for(let maxPrice of customers){
        let best = -1
        let bestIndex = -1

        for(let i = 0; i < tickets.length; i++){
            if(tickets[i] <= maxPrice && tickets[i] > best){
                best = tickets[i]
                bestIndex = i;
            }
        }
        if(bestIndex !== -1){
            tickets.splice(bestIndex, 1)  // remove the sold ticket
            result.push(best)
        }else{
            result.push(-1) // no ticket found
         }
    }
    return result
}

let tickets = [5, 3, 7, 8, 5];
let customers = [4, 8, 3];
console.log(concertTicketsBruteForce(tickets,customers).join("\n"))




function concertTicketsOptimized(tickets, customers) {
    tickets.sort((a, b) => a - b); // sort tickets

    const result = [];

    for (let maxPrice of customers) {
        let left = 0, right = tickets.length - 1;
        let bestIndex = -1;

        // Binary search for floor value (ticket <= maxPrice)
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (tickets[mid] <= maxPrice) {
                bestIndex = mid;   // possible match
                left = mid + 1;    // try to find bigger valid ticket
            } else {
                right = mid - 1;
            }
        }

        if (bestIndex === -1) {
            result.push(-1); // no ticket found
        } else {
            result.push(tickets[bestIndex]);
            tickets.splice(bestIndex, 1); // remove sold ticket
        }
    }

    return result;
}

// Example
console.log(concertTicketsOptimized([5, 3, 7, 8, 5], [4, 8, 3]).join("\n"));
