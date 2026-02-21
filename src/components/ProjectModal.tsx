import { useState } from "react";
import type { Project } from "../types/project";
import { projectDetails } from "../data/projectDetails";
import { FaX } from "react-icons/fa6";




export default function ProjectModal({
    selected,
    close,
    openArchitecture
}: {
    selected: Project,
    close: () => void,
    openArchitecture: () => void
}) {

    const selectedDetail = projectDetails[selected.projectId];
    const isWeb = selected.projectId == "standAloneWeb"
    const isDeepDiveDocs = !!selectedDetail.notionDocs?.length;

    const [openTech, setOpenTech] = useState(false);

    if (!selectedDetail) return null;

    return (


        <div
            onClick={close}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "white",
                    padding: 30,
                    width: isWeb ? 1200 : 900,
                    maxWidth: isWeb ? "95vw" : "55vw",
                    borderRadius: 10,
                    maxHeight: isWeb ? "92vh" : "72h",
                    overflowY: "auto"
                }}
            >
                <div
                    style={{
                        margin: "-30px -30px 20px -30px",
                        padding: "18px 30px",
                        background: "#395a9d",
                        color: "white",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        fontSize: 20,
                        fontWeight: 600
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", }}>
                        <div>{selected.title} </div>
                        <div style={{ display: "flex", alignItems: "center" }} onClick={close}><FaX color="#f9f9f9" /></div>
                    </div>
                </div>
                {selectedDetail && (
                    <>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                            <div
                                style={{
                                    width: isWeb ? "100%" : "30%"
                                }}
                            >

                                <img
                                    src={selectedDetail.gif}
                                    style={{
                                        width: "100%",
                                        height: "auto",       
                                        borderRadius: 10,
                                        marginTop: 10,
                                        display: "block"
                                    }}
                                 />
                            </div> 

                            <div style={{ width: isWeb ? "60%" : "70%", display: "flex", flexDirection: "column", }}>
                                <h4 style={{ marginBottom: 0 }}>Summary</h4>
                                <div
                                    style={{
                                        width: "100%",
                                        height: 1,
                                        background: "#e5e5e5",
                                        marginTop: 0
                                    }}
                                />

                                <div style={{ marginTop: 3, whiteSpace: "pre-line" }}>
                                    {selectedDetail.summary}
                                </div>

                                <h4 style={{ marginBottom: 0 }}>Architecture</h4>
                                <div
                                    style={{
                                        width: "100%",
                                        height: 1,
                                        background: "#e5e5e5",
                                        marginTop: 0
                                    }}

                                />
                                <div
                                    style={{ cursor: "pointer", color: "#3153aa" }}
                                    onClick={openArchitecture}
                                >
                                    Architecture Image
                                </div>

                                {isDeepDiveDocs && (
                                    <>
                                        <h4 style={{ marginBottom: 0 }}>Deep Dive Docs</h4>

                                        <div
                                            style={{
                                                width: "100%",
                                                height: 1,
                                                background: "#e5e5e5",
                                                marginTop: 0
                                            }}
                                        />

                                        <div style={{ marginTop: 5, fontSize: 14, marginLeft: 10, cursor: "pointer", color: "#3153aa" }}>
                                            {selectedDetail.notionDocs?.map((doc) => (
                                                <div
                                                    style={{ margin: 4 }}
                                                    onClick={() => window.open(doc.url)}
                                                >
                                                    · {doc.title}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                <h4
                                    style={{ marginBottom: 0, cursor: "pointer" }}
                                    onClick={() => setOpenTech(!openTech)}
                                >
                                    Tech Detail {openTech ? "▲" : "▼"}
                                </h4>

                                <div
                                    style={{
                                        width: "100%",
                                        height: 1,
                                        background: "#e5e5e5",
                                        marginTop: 0
                                    }}
                                />

                                {openTech && (
                                    <div style={{ marginTop: 5, fontSize: 14, marginLeft: 10 }}>
                                        {selectedDetail.techDetail.map(t => (
                                            <div style={{ margin: 4 }} key={t}>· {t}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>



    );

}