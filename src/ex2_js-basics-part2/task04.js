function testUnique (A) {   
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[i] === A[j]) 
            return false; 
        }
     }
    return true;
} 
testUnique ([2,4,6,6,9])