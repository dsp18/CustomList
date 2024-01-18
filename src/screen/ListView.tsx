import { View, StyleSheet, StatusBar, Text } from "react-native";
import { CustomListComponent } from "../components/CustomListComponent";

const persons = [
  {
    id: "1",
    name: "Earnest Green",
  },
  {
    id: "2",
    name: "Winston Orn",
  },
  {
    id: "3",
    name: "Carlton Collins",
  },
  {
    id: "4",
    name: "Malcolm Labadie",
  },
  {
    id: "5",
    name: "Michelle Dare",
  },
  {
    id: "6",
    name: "Carlton Zieme",
  },
  {
    id: "7",
    name: "Jessie Dickinson",
  },
  {
    id: "8",
    name: "Julian Gulgowski",
  },
  {
    id: "9",
    name: "Ellen Veum",
  },
];
export const ListView = () => {
  return (
    <View style={styles.container}>
      <CustomListComponent
        onPressItemView={function (listItem: any): void {}}
        isHorizontal={false}
        items={persons}
        itemView={(listItem) => {
          console.log({ listItem });
          return (
            <View style={styles.item}>
              <Text style={{ fontSize: 20 }}>{listItem.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: { backgroundColor: "red", margin: 20, padding: 20, height: 80 },

  title: {
    fontSize: 32,
  },
});
