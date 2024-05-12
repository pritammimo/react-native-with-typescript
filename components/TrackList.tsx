import { FlatList } from "react-native"
import library from "@/assets/data/library.json"
export const TrackList =()=>{
    return <FlatList data={library} renderItem={null}/>
}