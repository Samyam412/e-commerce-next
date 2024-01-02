// "use client";

// import { useState } from "react";
// import Input from "../components/inputs/input";
// import Heading from "../components/products/Heading";
// import { FieldValue, useForm, SubmitHandler } from "react-hook-form";



// const RegisterForm = () => {
//     const [isLoading, setIsLoading] = useState(false)
//     const  {register, handleSubmit, formState:{errors}} = useForm<FieldValue>({
//         defaultValues:{
//             email:'',
//             password:'',
//             name:'',
//             handleSubmit:()=>{

//             }
//         }
//     })

//   return (
//     <>
//       <Heading title="Sign up for E-shop" />
//       <hr className="bg-slate-300 w-full h-px" />
//       <Input
//       id="name"
//       label="name"
//       disabled={isLoading}
//       register={register}
//       errors={errors}
//       required
//       />
//     </>
//   );
// };

// export default RegisterForm;
