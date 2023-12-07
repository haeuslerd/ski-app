import axios from 'axios';

class InterfaceService{
    async getInterfaceById (serverID) {
        const url = `http://localhost:8888/api/interface/${serverID}`
        const result = await axios.get(url)
        if (result.error) {
          console.error(result.error)
        } else {
          return result.data
        }
      }
      
      async getInterface () {
        const url = `http://localhost:8888/api/interface/`
        const result = await axios.get(url)
        if (result.error) {
          console.error(result.error)
        } else {
          return result.data
        }
      }
      
      async getServers() {
        const url = `http://localhost:8888/api/server/`
        const result = await axios.get(url)
        if (result.error) {
          console.error(result.error)
        } else {
          return result.data
        }
      
      }

      async getServer_Drives() {
        const url = `http://localhost:8888/api/serverMonitoring`
        const result = await axios.get(url)
        if (result.error) {
          console.error(result.error)
        } else {
          return result.data
        }
      }

      async getLast_Backup(server) {
        const url = `http://localhost:8888/api/lastBackup/${server}`
        const result = await axios.get(url)
        if (result.error) {
          console.error(result.error)
        } else {
          return result.data
        }
      }

      async getServer_Reachable(server){
        const url = `http://localhost:8888/api/reachable/${server}`
        const result = await axios.get(url)
        if (result.error) {
          console.error(result.error)
        } else {
          return result.data
        }
      
      }
}

export const interfaceService = new InterfaceService();
