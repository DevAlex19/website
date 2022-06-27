import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { CreateAccountContainer, ForgotPasswordLink, Input, InputContainer,InputForm, InputLabel, InputWrapper, LoginContainer, UserLoginBtn, UserLoginContainer, UserLoginTitle } from "../styles/LoginStyles";

interface Inputs{
    loginEmail?:string,
    loginPassword?:string,
    registerEmail?:string,
    firstName?:string,
    lastName?:string,
    registerPassword?:string
}


function LoginForm(){
    const [openLogin,setLogin] = useState({login:true,register:false});
    const [focus,setFocus] = useState({loginEmail:false,loginPassword:false,registerEmail:false,
    firstName:false,lastName:false,registerPassword:false});
    const {register,handleSubmit,watch} = useForm();
    const inputs = watch();
    console.log(inputs.loginEmail)
    function onSubmit(data:Inputs){
      
    }

    return <LoginContainer>
        <UserLoginContainer openLogin={openLogin.login}>
            <UserLoginTitle>Accesare cont</UserLoginTitle>
                <InputForm onSubmit={handleSubmit(onSubmit)} >
                    <InputContainer openLogin={openLogin.login}>
                        <InputWrapper>
                            <InputLabel className={focus.loginEmail || inputs.loginEmail ? 'focus' : ''}>Email</InputLabel>
                            <Input {...register('loginEmail')} onFocus={()=>setFocus({...focus,loginEmail:true})} onBlur={()=>setFocus({...focus,loginEmail:false})}/>
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel className={focus.loginPassword || inputs.loginPassword ? 'focus' : ''}>Parola</InputLabel>
                            <Input {...register('loginPassword')} onFocus={()=>setFocus({...focus,loginPassword:true})} onBlur={()=>setFocus({...focus,loginPassword:false})}/>
                        </InputWrapper>
                    </InputContainer>
                    <UserLoginBtn  onClick={()=>{
                        if(!openLogin.login){
                            setLogin({login:!openLogin.login,register:false});
                        }
                    }} openLogin={openLogin.login}>Accesare cont</UserLoginBtn>
                </InputForm>
                <ForgotPasswordLink style={{display:openLogin.login ? 'block' : 'none'}} to=''>Ai uitat parola?</ForgotPasswordLink>
        </UserLoginContainer>
        <CreateAccountContainer openLogin={openLogin.register}>
            <UserLoginTitle>Creeaza cont</UserLoginTitle>
            <InputForm onSubmit={handleSubmit(onSubmit)} >
                <InputContainer openLogin={openLogin.register}>
                    <InputWrapper>
                                <InputLabel className={focus.registerEmail || inputs.registerEmail ? 'focus' : ''}>Email</InputLabel>
                                <Input {...register('registerEmail')} onFocus={()=>setFocus({...focus,registerEmail:true})} onBlur={()=>setFocus({...focus,registerEmail:false})}/>
                    </InputWrapper>
                    <div className='register'>
                        <InputWrapper>
                            <InputLabel className={focus.firstName || inputs.firstName ? 'focus' : ''}>Prenume</InputLabel>
                            <Input {...register('firstName')} onFocus={()=>setFocus({...focus,firstName:true})} onBlur={()=>setFocus({...focus,firstName:false})}/>
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel className={focus.lastName || inputs.lastName? 'focus' : ''}>Nume</InputLabel>
                            <Input {...register('lastName')} onFocus={()=>setFocus({...focus,lastName:true})} onBlur={()=>setFocus({...focus,lastName:false})}/>
                        </InputWrapper>
                    </div>
                    <InputWrapper>
                            <InputLabel className={focus.registerPassword || inputs.registerPassword ? 'focus' : ''}>Parola</InputLabel>
                            <Input {...register('registerPassword')} onFocus={()=>setFocus({...focus,registerPassword:true})} onBlur={()=>setFocus({...focus,registerPassword:false})}/>
                    </InputWrapper>
                </InputContainer>
                <UserLoginBtn className="registerBtn" onClick={()=>{
                    if(!openLogin.register){
                        setLogin({login:false,register:!openLogin.register});
                    }
                }} openLogin={openLogin.register}>Creeaza cont</UserLoginBtn>
            </InputForm>
        </CreateAccountContainer>
    </LoginContainer>
       
    
}

export default LoginForm;