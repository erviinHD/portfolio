export interface SkillsResponse {
    skills: Skill[];
}

export interface Skill {
    hab_id:      number;
    hab_nombre:  string;
    hab_url_img: string;
    hab_nivel:   number;
}
