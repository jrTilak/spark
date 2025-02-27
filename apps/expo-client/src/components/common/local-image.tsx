import { ImageKey, IMAGES } from "@/assets/images";
import { Image, ImageProps, ImageSourcePropType } from "react-native";

type Props = Omit<ImageProps, "source"> & {
  source: ImageKey;
};

const LocalImage = ({ source, ...props }: Props) => {
  return <Image source={IMAGES[source] as unknown as ImageSourcePropType} {...props} />;
};

export default LocalImage;
