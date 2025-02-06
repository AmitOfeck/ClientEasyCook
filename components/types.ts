export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (text: string) => void;
    type?: "text" | "password" | "email";
    icon?: string;
  }
  
  export interface SocialButtonProps {
    imageUrl: string;
    onPress: () => void;
  }
  
  export interface ActionButtonProps {
    label: string;
    onPress: () => void;
  }