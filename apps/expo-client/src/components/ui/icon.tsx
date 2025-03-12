import { ColorName } from "@/constants/colors";
import useColors from "@/hooks/use-colors";
import { LucideIcon, LucideProps } from "lucide-react-native";

export type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof sizes | number;
  color: ColorName;
} & LucideProps;

const sizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

const Icon = ({ icon: IconComponent, size = "md", color, ...props }: IconProps) => {
  const colors = useColors();

  return (
    <IconComponent
      size={typeof size === "number" ? size : sizes[size]}
      color={colors[color] || color}
      {...props}
    />
  );
};

export default Icon;
