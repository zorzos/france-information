export interface RegionType {
    nom: string
    code: string
}

export interface DepartmentType {
    nom: string
    code: string
    codeRegion: string
}

export interface NotificationDetails {
    message: string
    description: string
}