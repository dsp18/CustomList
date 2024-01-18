import { ReactElement, ReactNode, FC } from "react";
import { FlatList } from "react-native";

interface CustomListProps {
  items: any[];
  isHorizontal: boolean;
  itemView: (item: any) => ReactNode | ReactElement;
  onPressItemView: (item: any) => void;
}

export const CustomListComponent: FC<CustomListProps> = (props) => {
  return (
    <FlatList
      data={props.items}
      horizontal={props.isHorizontal}
      renderItem={(renderItemInfo) =>
        props.itemView(renderItemInfo.item) as ReactElement
      }
    />
  );
};
