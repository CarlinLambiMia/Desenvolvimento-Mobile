import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D", // fundo preto
    padding: 20,
    alignItems: "center",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00FF88", // verde neon
    marginVertical: 25,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  botaoAdd: {
    backgroundColor: "#00FF88",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#00FF88",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },

  textoBotao: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  headerLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#1C1C1E",
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderColor: "#2F2F31",
  },

  headerItem: {
    fontWeight: "bold",
    color: "#E5E5E5",
  },

  limpar: {
    color: "#FF5555",
    fontWeight: "600",
  },

  scroll: {
    backgroundColor: "#1A1A1A",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
    maxHeight: 260,
  },

  itemLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#2E2E2E",
  },

  nomeItem: {
    fontSize: 16,
    color: "#EAEAEA",
  },

  caloriaItem: {
    fontSize: 15,
    color: "#BBBBBB",
  },

  totalBox: {
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    shadowColor: "#00FF88",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },

  totalTexto: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#00FF88",
  },
});
