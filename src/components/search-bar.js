import { TouchableOpacity, StyleSheet, Animated, Dimensions, TextInput, View, Text, SafeAreaView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState, useRef, useEffect } from "react"


export const SearchBar = (props) => {
    const tintColor = props.tintColor ? props.tintColor : "black"
    const { children, ...searchProps } = props
    const [isOpen, setIsOpen] = useState(false);
    const widthAnim = useRef(new Animated.Value(0)).current
    const [displaySearchIcon, setDisplaySearchIcon] = useState(true)
    const isFocused = useRef(null)
    const collapse = () => {
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start(({ finished }) => {
        setDisplaySearchIcon(true)
      })
    }
  
    const expand = () => {
      setDisplaySearchIcon(false)
      Animated.timing(widthAnim, {
        toValue: Dimensions.get("window").width * (Dimensions.get("window").width < 400 ? 0.79 : 0.82),
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        isFocused.current.focus()
      })
    }
  
    useEffect(() => {
      if (isOpen)
        expand()
      else
        collapse()
    }, [isOpen])
  
    return (
      <View style={[styles.container, isOpen && styles.containerExpand]}>
        <View style={[styles.hstack, isOpen ? styles.expand : styles.collapse]}>
          {
            !displaySearchIcon ?
              <Animated.View style={{ width: widthAnim }}>
                <View style={styles.inputStack}>
                  <View>
                    <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                      <Ionicons name="arrow-back" size={24} color={tintColor} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput placeholder="Search" {...searchProps} ref={isFocused} />
                  </View>
                </View>
              </Animated.View>
  
              :
              <>
                {
                  props.enableBackButton &&
                  <View>
                    <TouchableOpacity onPress={props.onBack}>
                      <Ionicons name="arrow-back-outline" size={24} color={tintColor} />
                    </TouchableOpacity>
                  </View>
                }
  
                <View style={{ flex: 1, marginHorizontal: 12 }}>
                  <Text style={[styles.headerTitle, { color: tintColor, alignSelf: props.titleAlign }]} numberOfLines={1}>{props.headerTitle}</Text>
                </View>
                {props.children}
              </>
          }
          <View style={styles.searcIconContainer}>
            {displaySearchIcon ?
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                <Ionicons name="search" size={24} color={tintColor} />
              </TouchableOpacity>
  
              :
              (props.value !== "") ?
                <TouchableOpacity onPress={props.onClear}>
                  <Ionicons name="close" size={24} color={tintColor} />
                </TouchableOpacity>
                :
                <View style={{ width: 24 }}></View>
            }
          </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    collapse: {
      backgroundColor: "rgb(255,255,255)",
      paddingHorizontal: 0
    },
    expand: {
      backgroundColor: "rgb(240,240,240)",
      shadowColor: "black",
      elevation: 9,
      borderWidth: 1,
      borderColor: "rgb(220,220,220)",
    },
    inputStack: {
      height: 44,
      alignItems: "center",
      flexDirection: "row",
  
    },
    inputContainer: {
      paddingHorizontal: 8,
      flex: 1
    },
    hstack: {
      paddingHorizontal: 8,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      height: 44,
      flex: 1,
      marginHorizontal: 16,
      borderRadius: 12
    },
    searcIconContainer: {
      justifyContent: "center",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "normal",
      color: "rgb(28,28,30)",
    },
    container: {
      backgroundColor: "rgb(255,255,255)",
      borderBottomColor: "rgb(216,216,216)",
      elevation: 9,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      shadowColor: "black", //"rgb(216,216,216)",
      height: 80
    },
    containerExpand: {
      height: 90,
      paddingVertical: 8,
      backgroundColor: "rgb(225,225,225)"
    }
  })
  