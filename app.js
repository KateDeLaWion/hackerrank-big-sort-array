// One way to solve HackerRank Big Sorting 
let unsorted = ["20", "10", "1234567890123456789012345678901234567", "40", "12345678901234567890123456789012345", "2"];
let newArr=[];
let markIndex=0;

    for (let i=0; i<=unsorted.length; i++){
             i=0;
        let minNum = Number(unsorted[i]);
             
        for(let j=0; j<=unsorted.length-1; j++){
                
          if ( Number(unsorted[j]) <= minNum){
              
              minNum = Number(unsorted[j]);
              markIndex = j;
              }       
        }

      newArr.push(unsorted[markIndex]);
       unsorted.splice(markIndex,1);    

    }

    console.log(newArr);





    // Another way
    // let unsorted = ["20", "10", "12345678912345678912345678912345", "40", "60", "2"];
    // let newArr=[];
    // let minStr=[];
    // let markIndex=0;
    
    //     for (let i=0; i<=unsorted.length; i++){
    //              i=0;
    //         let minNum = Number(unsorted[i]);
                 
    //         for(let j=0; j<=unsorted.length-1; j++){
                    
    //           if ( Number(unsorted[j]) <= minNum){
    //               minNum = Number(unsorted[j]);
    //               markIndex = j;
    //               }       
    //         }
    
    //        minStr=minNum.toString();
    //        newArr.push(minStr);
    //        unsorted.splice(markIndex,1);    
    
    //     }
    
    //     console.log(newArr);



    






    // Java solution
  //   public class Solution {
  //     public static void main(String[] args) {
  //         Scanner in = new Scanner(System.in);
  //         int n = in.nextInt();
  //         String[] unsorted = new String[n];
  //         for(int unsorted_i=0; unsorted_i < n; unsorted_i++)
  //             unsorted[unsorted_i] = in.next();
  // Arrays.sort(unsorted, new Comparator<String>() {
  //         @Override
  //        public int compare(String o1, String o2) {
  //             if(o1.length()==o2.length())
  //              return o1.compareTo(o2);
  //               else if(o1.length()>o2.length())return 1;
  //               else return -1;
  // }});
  // for(String s:unsorted)System.out.println(s);
  // }
  // }
  

