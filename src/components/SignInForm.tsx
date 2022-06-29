import React,{useState} from "react";
import { UserLoginContainer,UserLoginTitle,InputForm,InputContainer,InputWrapper,InputLabel,Input,FormBtn,
UserLoginBtn,ForgotPasswordLink, PasswordIcon, LoginMessage } from "../styles/LoginStyles";
import { useForm } from "react-hook-form";
import { Form,Inputs } from "./LoginForm";
import { loginUser } from "./actions";
import { useAppDispatch } from "./store";
import { useNavigate } from "react-router-dom";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function SignInForm({setFocus,focus,openLogin,setLogin}:Form){
    
    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const [showPassword,setShowPassword] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const inputs = watch();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function onSubmitLogin(data:Inputs){
        dispatch(loginUser(data)).then((res:any) =>{
            if(res.payload.state){
                navigate('/dashboard');
                localStorage.setItem('user',res.payload.registerEmail);
            }else{
               setErrorMessage('Email sau parola incorecte.')
            }
        });
      }

    return <UserLoginContainer openLogin={openLogin.login}>
    <LoginMessage style={{display:openLogin.login ? 'block' : 'none'}}>{errorMessage}</LoginMessage>
    <UserLoginTitle>Accesare cont</UserLoginTitle>
        <InputForm onSubmit={handleSubmit(onSubmitLogin)} >
            <InputContainer openLogin={openLogin.login}>
                <InputWrapper>
                    <InputLabel className={focus.loginEmail || inputs.loginEmail ? 'focus' : ''}>Email</InputLabel>
                    <Input {...register('loginEmail',{required:'Email is required.',pattern:{value:emailRegex,
                    message:'Email is invalid.'}})} onFocus={()=>setFocus({...focus,loginEmail:true})} onBlur={()=>setFocus({...focus,loginEmail:false})}/>
                    <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.loginEmail?.message as string}</p>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel className={focus.loginPassword || inputs.loginPassword ? 'focus' : ''}>Parola</InputLabel>
                    <Input type={showPassword ? 'text' : 'password'} {...register('loginPassword',{required:'Password is required.',pattern:{value:passwordRegex,
                    message:'The password must be at least 8 characters and contain at least 1 uppercase character and 1 special character.'}})} onFocus={()=>setFocus({...focus,loginPassword:true})} onBlur={()=>setFocus({...focus,loginPassword:false})}/>
                    <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.loginPassword?.message as string}</p>
                    <PasswordIcon onClick={()=>setShowPassword(!showPassword)} icon={showPassword ? faEyeSlash : faEye}></PasswordIcon>
                </InputWrapper>
                <FormBtn>Accesare cont</FormBtn>
            </InputContainer>
        </InputForm>
        <UserLoginBtn onClick={()=>{
                if(!openLogin.login){
                    setLogin({login:!openLogin.login,register:false});
                }
            }} openLogin={openLogin.login}>Accesare cont</UserLoginBtn>
        <ForgotPasswordLink style={{display:openLogin.login ? 'block' : 'none'}} to=''>Ai uitat parola?</ForgotPasswordLink>
</UserLoginContainer>
}

export default SignInForm;