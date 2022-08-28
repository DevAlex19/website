import React,{useState} from "react";
import { CreateAccountContainer,UserLoginTitle,InputForm,InputContainer,InputWrapper,
Input,InputLabel,FormBtn,UserLoginBtn,PasswordIcon,LoginMessage } from "../styles/LoginStyles";
import { Form } from "./LoginForm";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../app/store/store";
import { addUser } from "../app/data/actions";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";



export type addUserType = {
    firstName?:string,
    lastName?:string,
    registerEmail?:string,
    registerPassword?:string
  }

function RegisterForm({setFocus,focus,openLogin,setLogin}:Form){


    const {register,handleSubmit,watch,formState:{errors},reset} = useForm();
    const inputs = watch();
    const [message,setMessage] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const dispatch = useAppDispatch();
    
    function onSubmitLogin(data:addUserType){
        dispatch(addUser(data)).then(res =>{
            if(!res.payload){
              setMessage('Email already exists.')
            }else{
              setMessage('Contul a fost creat cu succes.');
              reset();
              setTimeout(()=>{
                setMessage('');
              },8000);
            }
        });
      }


    return <CreateAccountContainer openLogin={openLogin.register}>
    <LoginMessage style={{display:openLogin.register ? 'block' : 'none',color:message.includes('succes') ? 'green' : '#e32636'}}>{message}</LoginMessage>
    <UserLoginTitle>Creeaza cont</UserLoginTitle>
    <InputForm onSubmit={handleSubmit(onSubmitLogin)} >
        <InputContainer openLogin={openLogin.register}>
            <InputWrapper>
                        <InputLabel className={focus.registerEmail || inputs.registerEmail ? 'focus' : ''}>Email</InputLabel>
                        <Input {...register('registerEmail',{required:'Email is required.',pattern:{value:emailRegex,
                        message:'Email is invalid.'}})} onFocus={()=>setFocus({...focus,registerEmail:true})} onBlur={()=>setFocus({...focus,registerEmail:false})}/>
                        <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.registerEmail?.message as string}</p>
            </InputWrapper>
            <div className='register'>
                <InputWrapper>
                    <InputLabel className={focus.firstName || inputs.firstName ? 'focus' : ''}>Prenume</InputLabel>
                    <Input {...register('firstName',{required:'First name is required.'})} onFocus={()=>setFocus({...focus,firstName:true})} onBlur={()=>setFocus({...focus,firstName:false})}/>
                    <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.firstName?.message as string}</p>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel className={focus.lastName || inputs.lastName? 'focus' : ''}>Nume</InputLabel>
                    <Input {...register('lastName',{required:'Last name is required.'})} onFocus={()=>setFocus({...focus,lastName:true})} onBlur={()=>setFocus({...focus,lastName:false})}/>
                    <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.lastName?.message as string}</p>
                </InputWrapper>
            </div>
            <InputWrapper>
                    <InputLabel className={focus.registerPassword || inputs.registerPassword ? 'focus' : ''}>Parola</InputLabel>
                    <Input type={showPassword ? 'text' : 'password'} {...register('registerPassword',{required:'Password is required.',pattern:{value:passwordRegex,
                    message:'The password must be at least 8 characters and contain at least 1 uppercase character and 1 special character.'}})} onFocus={()=>setFocus({...focus,registerPassword:true})} onBlur={()=>setFocus({...focus,registerPassword:false})}/>
                    <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.registerPassword?.message as string}</p>
                    <PasswordIcon onClick={()=>setShowPassword(!showPassword)} icon={showPassword ? faEyeSlash : faEye}></PasswordIcon>
            </InputWrapper>
            <FormBtn className="registerBtn">Creeaza cont</FormBtn>
        </InputContainer>
    </InputForm>
    <UserLoginBtn className="registerBtn" onClick={()=>{
            if(!openLogin.register){
                setLogin({login:false,register:!openLogin.register});
            }
        }} openLogin={openLogin.register}>Creeaza cont</UserLoginBtn>
</CreateAccountContainer>
}

export default RegisterForm;