import { useState } from "react";
import type { Project } from "../types/project";
import { projectDetails } from "../data/projectDetails";

export default function ProjectModal({
    selected,
    close
}: { selected: Project, close: () => void }) {

    const [openTech, setOpenTech] = useState(false);
    const selectedDetail = projectDetails[selected.projectId];

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
                    width: 900,
                    maxWidth: "55vw",
                    borderRadius: 10,
                    maxHeight: "72h",
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
                    {selected.title}
                </div>
                {selectedDetail && (
                    <>
                        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                            <div style={{ width: "30%", }}>
                                <img
                                    src={selectedDetail.gif}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, marginTop: 10 }}
                                />
                            </div>

                            <div style={{ width: "70%", display: "flex", flexDirection: "column", }}>
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

                                <div>{selectedDetail.architecture}</div>

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
                                            <div key={t}>· {t}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}



                <button
                    style={{ marginTop: 20 }}
                    onClick={close}
                >
                    닫기
                </button>
            </div>
        </div>

    );
}