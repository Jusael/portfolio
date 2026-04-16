import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
    const isNanoBanana = selected.projectId === "nanobananaAuto";

    const modalFrame = isWeb
        ? { width: 1200, maxWidth: "95vw" as const, maxHeight: "92vh" as const }
        : isNanoBanana
          ? { width: 1440, maxWidth: "98vw" as const, maxHeight: "96vh" as const }
          : { width: 900, maxWidth: "55vw" as const, maxHeight: "72vh" as const };

    const gifColumnPct = isWeb ? undefined : isNanoBanana ? "52%" : "30%";
    const textColumnPct = isWeb ? undefined : isNanoBanana ? "48%" : "70%";
    const isDeepDiveDocs = !!selectedDetail.notionDocs?.length;
    const hasArchitecture = Boolean(selectedDetail.architecture?.trim());

    const [openTech, setOpenTech] = useState(false);
    const [gifReady, setGifReady] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        setGifReady(false);
    }, [selected.projectId, selectedDetail.gif]);

    useLayoutEffect(() => {
        const el = imgRef.current;
        if (el?.complete && el.naturalWidth > 0) {
            setGifReady(true);
        }
    }, [selected.projectId, selectedDetail.gif]);

    if (!selectedDetail) return null;

    return (
        <div
            className={`project-modal-backdrop${isWeb ? " project-modal-backdrop--web" : ""}`}
            onClick={close}
        >
            <div
                className={`project-modal-panel${isWeb ? " project-modal-panel--web" : ""}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    padding: 30,
                    width: modalFrame.width,
                    maxWidth: modalFrame.maxWidth,
                    maxHeight: modalFrame.maxHeight,
                }}
            >
                <div
                    className="project-modal-header"
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
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ lineHeight: 1.35 }}>{selected.title}</div>
                        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }} onClick={close}><FaX color="#f9f9f9" /></div>
                    </div>
                </div>
                {selectedDetail && (
                    <>
                        <div className={`project-modal-body${isWeb ? " project-modal-body--web" : ""}`}>
                            <div
                                className="project-modal-gif-col"
                                style={gifColumnPct ? { width: gifColumnPct } : undefined}
                            >
                                <div className="project-modal-gif-wrap">
                                    {!gifReady && (
                                        <div className="project-modal-gif-loading" aria-busy="true">
                                            <span className="project-modal-gif-spinner" aria-hidden />
                                            로딩 중…
                                        </div>
                                    )}
                                    <img
                                        ref={imgRef}
                                        src={selectedDetail.gif}
                                        alt=""
                                        onLoad={() => setGifReady(true)}
                                        onError={() => setGifReady(true)}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: 10,
                                            marginTop: 10,
                                            display: "block",
                                            opacity: gifReady ? 1 : 0,
                                            transition: "opacity 0.2s ease",
                                            ...(isNanoBanana
                                                ? {
                                                      maxHeight: "min(84vh, 920px)",
                                                      objectFit: "contain" as const,
                                                  }
                                                : {}),
                                        }}
                                     />
                                </div>
                            </div>

                            <div
                                className="project-modal-text-col"
                                style={textColumnPct ? { width: textColumnPct } : undefined}
                            >
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

                                {hasArchitecture && (
                                    <>
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
                                    </>
                                )}

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
                                                    key={doc.title}
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
