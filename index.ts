interface Student  {
    id:number
    name: string;
    level: string;
    isSenior: boolean;
  };


let school:Student[]= [
{ id:1,name:'alaa', level:'5',isSenior:true},

{ id:2,name:'sara', level:'2',isSenior:false},


{ id:3,name:'noor', level:'4',isSenior:false}
]


function printStudent(arr:Student[]){
    for (const student of arr) {
      console.log(`ID: ${student.id}, Name: ${student.name}, Level: ${student.level}, Senior: ${student.isSenior} `);
      
    }
    
  }
  printStudent(school)

interface Teacher   {
    id:number
    name: string;
    specialty: string;
    courseNum: number;
  };





  let tech:Teacher[]= [
    { id:1,name:'alaa', specialty:'5',courseNum:7676},
    
    { id:2,name:'sara', specialty:'2',courseNum:8686},
    
    
    { id:3,name:'noor', specialty:'4',courseNum:9974}
    ]
    




    function course(tech,courseNum: number) {

         tech.courseNum;
    
        return tech;
    }


export{}


 