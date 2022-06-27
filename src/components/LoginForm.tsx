import React,{useState,useRef} from "react";
import { useForm } from "react-hook-form";
import { CreateAccountContainer, ForgotPasswordLink, FormBtn, Input, InputContainer,InputForm, InputLabel, InputWrapper, LoginContainer, UserLoginBtn, UserLoginContainer, UserLoginTitle } from "../styles/LoginStyles";

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
    const {register,handleSubmit,watch,formState:{errors,isSubmitting},setError} = useForm();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const inputs = watch();
 

    function onSubmitLogin(data:Inputs){
      const {loginEmail,loginPassword} = data;
      if(!loginEmail){
        setError('loginEmail',{type:'custom',message:'Email is required.'});
      }
      if(loginEmail && !emailRegex.test(loginEmail)){
        setError('loginEmail',{type:'custom',message:'Email is invalid.'});
      }
      if(!loginPassword){
        setError('loginPassword',{type:'custom',message:'Password is required.'});
      }
      if(loginPassword && !passwordRegex.test(loginPassword)){
        setError('loginPassword',{type:'custom',message:'The password must be at least 8 characters and contain at least 1 uppercase character and 1 special character.'});
      }
        
    }
    function onSubmitRegister(data:Inputs){
        const {firstName,lastName,registerEmail,registerPassword} = data;
        if(!registerEmail){
            setError('registerEmail',{type:'custom',message:'Email is required.'});
          }
          if(registerEmail && !emailRegex.test(registerEmail)){
            setError('registerEmail',{type:'custom',message:'Email is invalid.'});
          }
          if(!registerPassword){
            setError('registerPassword',{type:'custom',message:'Password is required.'});
          }
          if(registerPassword && !passwordRegex.test(registerPassword)){
            setError('registerEmail',{type:'custom',message:'The password must be at least 8 characters and contain at least 1 uppercase character and 1 special character.'});
          }
          if(!firstName){
            setError('firstName',{type:'custom',message:'First name is required.'});
          }
          if(!lastName){
            setError('lastName',{type:'custom',message:'First name is required.'});
          }
      }
    
    return <LoginContainer>
        <UserLoginContainer openLogin={openLogin.login}>
            <UserLoginTitle>Accesare cont</UserLoginTitle>
                <InputForm onSubmit={handleSubmit(onSubmitLogin)} >
                    <InputContainer openLogin={openLogin.login}>
                        <InputWrapper>
                            <InputLabel className={focus.loginEmail || inputs.loginEmail ? 'focus' : ''}>Email</InputLabel>
                            <Input {...register('loginEmail')} onFocus={()=>setFocus({...focus,loginEmail:true})} onBlur={()=>setFocus({...focus,loginEmail:false})}/>
                            <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.loginEmail?.message as string}</p>
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel className={focus.loginPassword || inputs.loginPassword ? 'focus' : ''}>Parola</InputLabel>
                            <Input {...register('loginPassword')} onFocus={()=>setFocus({...focus,loginPassword:true})} onBlur={()=>setFocus({...focus,loginPassword:false})}/>
                            <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.loginPassword?.message as string}</p>
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
        <CreateAccountContainer openLogin={openLogin.register}>
            <UserLoginTitle>Creeaza cont</UserLoginTitle>
            <InputForm onSubmit={handleSubmit(onSubmitRegister)} >
                <InputContainer openLogin={openLogin.register}>
                    <InputWrapper>
                                <InputLabel className={focus.registerEmail || inputs.registerEmail ? 'focus' : ''}>Email</InputLabel>
                                <Input {...register('registerEmail')} onFocus={()=>setFocus({...focus,registerEmail:true})} onBlur={()=>setFocus({...focus,registerEmail:false})}/>
                                <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.registerEmail?.message as string}</p>
                    </InputWrapper>
                    <div className='register'>
                        <InputWrapper>
                            <InputLabel className={focus.firstName || inputs.firstName ? 'focus' : ''}>Prenume</InputLabel>
                            <Input {...register('firstName')} onFocus={()=>setFocus({...focus,firstName:true})} onBlur={()=>setFocus({...focus,firstName:false})}/>
                            <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.firstName?.message as string}</p>
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel className={focus.lastName || inputs.lastName? 'focus' : ''}>Nume</InputLabel>
                            <Input {...register('lastName')} onFocus={()=>setFocus({...focus,lastName:true})} onBlur={()=>setFocus({...focus,lastName:false})}/>
                            <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.lastName?.message as string}</p>
                        </InputWrapper>
                    </div>
                    <InputWrapper>
                            <InputLabel className={focus.registerPassword || inputs.registerPassword ? 'focus' : ''}>Parola</InputLabel>
                            <Input {...register('registerPassword')} onFocus={()=>setFocus({...focus,registerPassword:true})} onBlur={()=>setFocus({...focus,registerPassword:false})}/>
                            <p style={{color:'red',marginTop:'0.8rem'}}>{errors?.registerPassword?.message as string}</p>
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
    </LoginContainer>
       
    
}

export default LoginForm;