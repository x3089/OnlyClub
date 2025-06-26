import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    const userId = "635126588240953374";
    const [discordData, setDiscordData] = useState(null);
    const cardRef = useRef(null);

    const statusMap = {
        online: { color: '#23a55a', text: 'En línea' },
        idle: { color: '#f0b232', text: 'Ausente' },
        dnd: { color: '#f23f43', text: 'No molestar' },
        offline: { color: '#80848e', text: 'Desconectado' }
    };

    useEffect(() => {
        const fetchDiscordStatus = async () => {
            try {
                const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
                const { data } = await res.json();
                setDiscordData(data);
            } catch (e) {
                console.error("Error al obtener el estado de Discord:", e);
            }
        };

        fetchDiscordStatus();
        const intervalId = setInterval(fetchDiscordStatus, 15000);

        return () => clearInterval(intervalId);
    }, [userId]);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cardRef]);

    const avatarUrl = discordData ? `https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}.webp?size=128` : '';
    const statusInfo = discordData ? statusMap[discordData.discord_status] : statusMap.offline;

    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-montserrat font-black text-white text-glow">Contacto</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-roboto-condensed mt-4">
                        ¿Interesado en promociones o colaboraciones? Contacta al administrador.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    ref={cardRef}
                    className="max-w-md mx-auto elegant-card glass-effect rounded-3xl p-8 transition-transform duration-200 ease-out"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {discordData ? (
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <img src={avatarUrl} alt="Discord Avatar" className="w-24 h-24 rounded-full border-4" style={{borderColor: statusInfo.color}} />
                                <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full border-4 border-gray-800" style={{ backgroundColor: statusInfo.color }}></span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white text-shadow">{discordData.discord_user.global_name}</p>
                                <p className="text-sm" style={{color: statusInfo.color}}>{statusInfo.text}</p>
                                <p className="text-gray-400 mt-2 text-sm">
                                    ID: {discordData.discord_user.username}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-32">
                           <p>Cargando estado de Discord...</p>
                        </div>
                    )}
                    <div className="mt-6 border-t border-gray-700 pt-6">
                        <p className="text-gray-300">
                            Para cualquier consulta sobre promociones, colaboraciones u otros asuntos, por favor contacta a esta persona directamente a través de Discord.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;