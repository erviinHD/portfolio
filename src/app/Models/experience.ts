export interface ExperienceResponse {
    experience: Experience[];
}

export interface ExperienceDetailResponse {
    experienceDetail: ExperienceDetail[];
}

export interface Experience {
    exp_id:          number;
    exp_proyecto:    string;
    exp_descripcion: string;
    exp_url_img:     string;
    exp_tags:        string;
    exp_tipo:        string;
    exp_tipoll:      string;
}

export interface ExperienceDetail {
    img_id:     number;
    img_exp_id: number;
    img_url:    string;
}


