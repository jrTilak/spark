import { ICON_COLORS, IconColorKey } from "@/constants/theme";
import { LucideIcon, LucideProps } from "lucide-react-native";

export type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof sizes | number;
  color: IconColorKey;
} & LucideProps;

const sizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

const Icon = ({ icon: IconComponent, size = "md", color, ...props }: IconProps) => {
  return (
    <IconComponent
      size={typeof size === "number" ? size : sizes[size]}
      color={ICON_COLORS[color as IconColorKey] || color}
      {...props}
    />
  );
};

export default Icon;
