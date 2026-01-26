import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Link, router } from 'expo-router';
import { useState } from "react";
import { Alert, Text, View, Button } from 'react-native';
import {createUser} from "@/lib/appwrite";

const SignUP = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    
    const submit = async () => {
       const { name, email, password } = form;


       if(!form.name || !form.email || !form.password) return Alert.alert('Error', 'Please enter valid email address & password.' );

       setIsSubmitting(true)

       try {
         await createUser({email, password, name});

            router.replace('/');
        } catch(error: any) {
            Alert.alert('Error', error.message);
  
        } finally {
            setIsSubmitting(false);
        }
    }


    



  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
                placeholder= "Digite o seu nome completo"
                value={form.name}
                   onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
                   label="Nome completo"
                />
                 <CustomInput
                placeholder= "Digite o seu email"
                value={form.email}
                   onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
                  label="Email"
                  keyboardType="email-address"
                />
               <CustomInput
                placeholder= "Digite a sua senha"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
                  label="Senha"
                  secureTextEntry={true}
                />
                <CustomButton
                title="Sign Up"
                 isLoading={isSubmitting}
                onPress={submit}
                />

                <View className="flex flex-row w-full items-center justify-center mt-5 gap-2">
                  
                  <Text className="base-regular text-gray-100">
                    Já tenho uma conta?
                  </Text>

                  <Link href="/sign-in" className="base-bold text-primary">
                   Entrar

                  </Link>
                </View>
    </View>
  )
};

export default SignUP;