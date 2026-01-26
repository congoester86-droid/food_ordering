import { Link, router } from 'expo-router';
import { View, Text, Button, Alert } from 'react-native'
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import {useState} from "react";
import { signIn } from "@/lib/appwrite";
import * as Sentry from '@sentry/react-native'

const SignIn = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });
    
    const submit = async () => {
       if(!form.email || !form.password) return Alert.alert('Error', 'Please enter valid email address & password.' );

       setIsSubmitting(true)

       try {
             await signIn({ email: form.email, password: form.password });


            Alert.alert('Sucess', 'user signed in successfully.');
            router.replace('/');
        } catch(error: any) {
            Alert.alert('Error', error.message);
            Sentry.captureEvent(error);
  
        } finally {
            setIsSubmitting(false);
        }
    }


    



  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
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
                title="Sign In"
                 isLoading={isSubmitting}
                onPress={submit}
                />
                <View className="flex flex-row w-full items-center justify-center mt-5 gap-2">
                  
                  <Text className="base-regular text-gray-100">
                    Não tem um conta?
                  </Text>

                  <Link href="/sign-up" className="base-bold text-primary">
                   Inscreva-se

                  </Link>
                </View>
    </View>
  )
};

export default SignIn;