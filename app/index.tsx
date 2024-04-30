import { StyleSheet, Text, View } from "react-native";
import { Link, usePathname } from "expo-router";
import profile from "./about";
import userProfile from "./UserProfilePage";

export default function Page () {

    return(
        <View style= {styles.container}>
            <View style= {styles.main}>
                <Text style ={styles.header}>Hello</Text>
                <Text style ={styles.header}>First Project</Text>
                <Link style ={styles.header2}  push href='./about?Name=Miguel&LastName=Quintana'>Open Profile</Link>
                <Link style ={styles.header2} replace href= './UserProfilePage?Name=Miguel&LastName=Quintana'>User Profile</Link>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
        padding: 24,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    header: {
        fontSize: 24,
        color: 'orange',
        textAlign: 'center',
        padding: 30,
      },

      header2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        padding: 30,
      },
})