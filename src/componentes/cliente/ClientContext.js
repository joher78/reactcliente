import { createContext, useState } from "react";
import { clientes } from "../dataApp/dataClient";

export const ClientContext = createContext();

export function ClientContextProvider(props) {

    const [clients, setClients] = useState(clientes)

    const saveClient = (client) => setClients([...clients, client])

    const deleteClient = (id) => setClients(clients.filter(client => client.id !== id)) 

    const updateClient = (client) => setClients(clients.map(c => c.id === client.id ? client : c))

    const getClient = (id) => clients.find(client => client.id === id)


    return (
    <ClientContext.Provider value={{clients, setClients, saveClient, deleteClient, updateClient, getClient}}>
        {props.children}
        </ClientContext.Provider>)
}   